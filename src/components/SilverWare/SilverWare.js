function silverWare( props ) {
    return (
        <>
            <div>
                Spoons: { props.count * 2 }
            </div>
            <div>
                Forks: { props.count * 2 }
            </div>
            <div>
                Knives: { props.count * 2 }
            </div>
        </>
    )
} // end silverWare

export default silverWare;