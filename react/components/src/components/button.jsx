import classNames from "classnames"

export default function Button({children, styleProp = 'default'}) {
  return (
    <>
      <button className={classNames({
        'defaultStyle': styleProp === 'default',
        'redStyle': styleProp === 'red',
        'blueStyle': styleProp === 'blue'
      })} onClick={() => alert('Button Slot Component')}>{children}</button>
    </>
  )
}
