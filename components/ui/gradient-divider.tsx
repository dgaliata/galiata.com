import { clsx } from 'clsx'

export function GradientDivider({ className }: { className?: string }) {
  return (
    <div
      className={clsx([
        'h-0.5 w-full rounded-md',
        'bg-gradient-to-r from-emerald-400 via-emerald-500 to-sky-300',
        className,
      ])}
    />
  )
}
