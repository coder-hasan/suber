'use client'

type CustomButtonProps = {
  clickHandlar: () => void
  btnText: string
  styleClass: string
}

export default function CustomButton({clickHandlar, btnText, styleClass}: CustomButtonProps) {
  return (
    <div className="w-full flex items-center justify-center h-[25px]">
      <button onClick={clickHandlar} className={`${styleClass} uppercase cursor-pointer font-avant text-white tracking-wider text-base font-semibold outline-none`}>{btnText}</button>
    </div>
  )
}
