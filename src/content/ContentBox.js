import '../css/General.css'

/**
 * 
 * @param {*} props name left right width 
 * @returns 
 */
function ContentBox (props) {


  return (
    <div>
      <div className='info-box'>
        <h2 className='thisText' style={{fontSize: props.fontSize/18}} >Features {props.name}</h2>
      </div>
      <div className='container' >
        <div className='fixed'>
          <img src={props.left} alt="oh" style={{width: props.width}}/>
        </div>
        <div className='flex-item' >
          <img src={props.right} alt="kic" style={{width: props.width}}/>
        </div>
      </div>
    </div>
  )
}

export default ContentBox