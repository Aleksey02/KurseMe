import classes from './Item.module.scss'
import { useState } from 'react'
import img1 from '../../../../../assets/images/Home/FAQ/review.jpg'

const images = {
    img1: img1
}

function Item({info}){
    const [isAnswerOpen, setIsAnswerOpen] = useState(false)
    return (
        <div className={classes.item}>
            <div className={classes.item__up + ' ' + (isAnswerOpen?classes.active: '')}  onClick={()=>setIsAnswerOpen(prev=>!prev)}>
                <p className={classes.item__question}>{info.question}</p>
                {!isAnswerOpen && <svg fill="currentColor" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M491.841,156.427c-19.471-45.946-51.936-85.013-92.786-112.637C358.217,16.166,308.893-0.007,256,0
                            c-35.254-0.002-68.946,7.18-99.571,20.158C110.484,39.63,71.416,72.093,43.791,112.943C16.167,153.779-0.007,203.104,0,256
                            c-0.002,35.255,7.181,68.948,20.159,99.573c19.471,45.946,51.937,85.013,92.786,112.637C153.783,495.834,203.107,512.007,256,512
                            c35.253,0.002,68.946-7.18,99.571-20.158c45.945-19.471,85.013-51.935,112.638-92.785C495.834,358.22,512.007,308.894,512,256
                            C512.002,220.744,504.819,187.052,491.841,156.427z M460.413,342.257c-16.851,39.781-45.045,73.723-80.476,97.676
                            c-35.443,23.953-78.02,37.926-123.936,37.933c-30.619-0.002-59.729-6.218-86.255-17.454
                            c-39.781-16.851-73.724-45.044-97.677-80.475C48.114,344.495,34.14,301.917,34.133,256c0.002-30.62,6.219-59.731,17.454-86.257
                            c16.851-39.781,45.045-73.724,80.476-97.676C167.506,48.113,210.084,34.14,256,34.133c30.619,0.002,59.729,6.218,86.255,17.454
                            c39.781,16.85,73.724,45.044,97.677,80.475c23.953,35.443,37.927,78.02,37.934,123.939
                            C477.864,286.62,471.648,315.731,460.413,342.257z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M389.594,239.301H272.699V122.406c0-9.222-7.477-16.699-16.699-16.699c-9.222,0-16.699,7.477-16.699,16.699v116.895
                            H122.406c-9.222,0-16.699,7.477-16.699,16.699s7.477,16.699,16.699,16.699h116.895v116.895c0,9.222,7.477,16.699,16.699,16.699
                            c9.222,0,16.699-7.477,16.699-16.699V272.699h116.895c9.222,0,16.699-7.477,16.699-16.699S398.817,239.301,389.594,239.301z"/>
                    </g>
                </g>
                </svg>}
                {isAnswerOpen && <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" >
                    <g id="Page-1" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd" sketch:type="MSPage">
                        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-516.000000, -1087.000000)" fill="currentColor">
                            <path d="M532,1117 C524.268,1117 518,1110.73 518,1103 C518,1095.27 524.268,1089 532,1089 C539.732,1089 546,1095.27 546,1103 C546,1110.73 539.732,1117 532,1117 L532,1117 Z M532,1087 C523.163,1087 516,1094.16 516,1103 C516,1111.84 523.163,1119 532,1119 C540.837,1119 548,1111.84 548,1103 C548,1094.16 540.837,1087 532,1087 L532,1087 Z M538,1102 L526,1102 C525.447,1102 525,1102.45 525,1103 C525,1103.55 525.447,1104 526,1104 L538,1104 C538.553,1104 539,1103.55 539,1103 C539,1102.45 538.553,1102 538,1102 L538,1102 Z" id="minus-circle" sketch:type="MSShapeGroup">
                    </path>
                        </g>
                    </g>
                </svg>}
            </div>
            <div className={classes.item__bottom}>
            {isAnswerOpen &&<p className={classes.item__answer}>
                {info.answer}
                {info.link && <a className={classes.item__link} href={info.link} target="_blank">{info.link}</a>}
                {info.img && <img className={classes.item__img} src={images[info.img]} alt="review photo"/>}
                
                </p>}
            </div>
        </div>
    )
}

export default Item