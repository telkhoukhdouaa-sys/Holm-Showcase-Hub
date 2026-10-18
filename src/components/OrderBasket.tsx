import { useState } from "react";
import { Check, Copy, ExternalLink, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { HOLM, formatDA, type MenuItem } from "@/lib/holm";
import { orderMessage, orderTotal, type OrderLine } from "@/lib/order";

export function OrderBasket({ lines, change }: { lines: OrderLine[]; change: (item: MenuItem, delta: number) => void }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const message = orderMessage(lines, name, notes);
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const copy = async () => {
    try { await navigator.clipboard.writeText(message); setCopied(true); setError(""); }
    catch { setError("Could not copy. Select and copy the message below instead."); }
  };
  return <>
    {count > 0 && <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-5 pb-[max(16px,env(safe-area-inset-bottom))] pt-3 backdrop-blur">
      <Button className="mx-auto flex h-12 w-full max-w-lg justify-between" onClick={() => { setCopied(false); setOpen(true); }}>
        <span className="flex items-center gap-2"><ShoppingBag />View basket · {count}</span><span>{formatDA(orderTotal(lines))}</span>
      </Button>
    </div>}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90svh] w-[calc(100%-24px)] overflow-y-auto rounded-lg p-5">
        <DialogTitle className="pr-7 font-serif text-2xl">Your order</DialogTitle>
        <DialogDescription>Copy your order, then paste and send it in an Instagram message to {HOLM.instagramHandle}. HOLM will confirm availability.</DialogDescription>
        {lines.length === 0 ? <p className="py-6 text-muted-foreground">Your basket is empty.</p> : <>
          <ul>{lines.map((line) => <li key={line.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-3">
            <div className="min-w-0"><p className="text-sm font-medium">{line.name}</p><p className="mt-1 text-xs text-muted-foreground">{formatDA(line.price * line.quantity)}</p></div>
            <div className="flex shrink-0 items-center gap-1">
              <Button variant="outline" size="icon" aria-label={`Remove one ${line.name}`} onClick={() => { change(line, -1); setCopied(false); }}><Minus /></Button>
              <span className="w-6 text-center text-sm tabular-nums">{line.quantity}</span>
              <Button variant="outline" size="icon" aria-label={`Add one ${line.name}`} onClick={() => { change(line, 1); setCopied(false); }}><Plus /></Button>
            </div>
          </li>)}</ul>
          <p className="flex justify-between font-semibold"><span>Total</span><span>{formatDA(orderTotal(lines))}</span></p>
          <label className="text-sm">Your name (optional)<input value={name} onChange={(e) => { setName(e.target.value); setCopied(false); }} className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-base" /></label>
          <label className="text-sm">Order notes (optional)<textarea value={notes} onChange={(e) => { setNotes(e.target.value); setCopied(false); }} rows={2} className="mt-2 w-full rounded-md border border-input bg-background p-3 text-base" /></label>
          <label className="text-sm">Order message<textarea aria-label="Order message" readOnly value={message} rows={5} className="mt-2 w-full rounded-md border border-input bg-muted p-3 text-sm" /></label>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <Button className="h-11" onClick={copy}>{copied ? <Check /> : <Copy />}{copied ? "Order copied" : "Copy order"}</Button>
          <Button asChild variant="outline" className="h-11"><a href="https://ig.me/m/holm.dz_" target="_blank" rel="noreferrer"><ExternalLink />Open Instagram messages</a></Button>
          <p className="text-xs text-muted-foreground">Your order is not sent until you send the message on Instagram. No payment is taken here.</p>
        </>}
      </DialogContent>
    </Dialog>
  </>;
}