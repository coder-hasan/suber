'use client'

type CustomButtonProps = {
  clickHandlar: () => void
  btnText: string
}

export default function CustomButton({clickHandlar, btnText}: CustomButtonProps) {
  return (
    <button onClick={clickHandlar} className="enter-pulse uppercase cursor-pointer font-avant text-white tracking-wider text-base font-semibold outline-none">{btnText}</button>
  )
}
