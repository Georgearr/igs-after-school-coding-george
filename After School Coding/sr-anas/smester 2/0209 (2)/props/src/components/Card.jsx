
const cardStyle = {
    border: '1px solid black',
    minHeight: '100px',
    minWidth: '100px',
    margin: '0px 10px',
    backgroundColor: 'yellowgreen',
    textAlign: 'center',
    lineHeight: '50px',
}

export default function Card({number}) {
    return (
            <div style={cardStyle}>
                <h1>{number}</h1>
            </div>
    )
}