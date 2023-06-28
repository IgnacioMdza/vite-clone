export default function EmoticonsCard (props) {
    return (
        <article className= 'card'>
            <div className='cardIconDiv'>
                <i className='cardIcon'>{props.icon}</i>
            </div>
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardParagraph'>{props.content}</p>
        </article>
    )
}