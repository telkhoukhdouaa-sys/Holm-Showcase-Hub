import { formatDA, type MenuItem } from "./holm";
export type OrderLine = MenuItem & { quantity: number };
export function changeQuantity(lines: OrderLine[], item: MenuItem, delta: number): OrderLine[] {
  const current = lines.find((line) => line.name === item.name);
  const quantity = Math.max(0, (current?.quantity ?? 0) + delta);
  if (!current) return quantity ? [...lines, { ...item, quantity }] : lines;
  return lines.flatMap((line) => line.name !== item.name ? [line] : quantity ? [{ ...line, quantity }] : []);
}
export const orderTotal = (lines: OrderLine[]) => lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
export function orderMessage(lines: OrderLine[], name: string, notes: string) {
  return ["Hello HOLM! I'd like to order:", ...lines.map((line) => `${line.quantity} × ${line.name} — ${formatDA(line.price * line.quantity)}`), `Total: ${formatDA(orderTotal(lines))}`, name.trim() ? `Name: ${name.trim()}` : "", notes.trim() ? `Notes: ${notes.trim()}` : "", "Please confirm availability and how I can collect my order."].filter(Boolean).join("\n");
}