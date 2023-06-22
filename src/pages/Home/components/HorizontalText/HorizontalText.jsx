import './HorizontalText.css'
import {ReactComponent as Dot} from "src/assets/images/dot.svg";


const HorizontalText = () => {
    return (
        <section className='horizontal-text'>
            <div className="marquee">
                <div className="marquee__group">
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                </div>
                <div className="marquee__group" aria-hidden="true">
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                </div>
            </div>
            <div className="marquee left">
                <div className="marquee__group-left">
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                </div>
                <div className="marquee__group-left" aria-hidden="true">
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                    <span>Качество на высшем уровне Качество на высшем уровне <Dot/></span>
                    <span>более 4568 плотно <Dot/></span>
                </div>
            </div>
        </section>
    )
}

export default HorizontalText