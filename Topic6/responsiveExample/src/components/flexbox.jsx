function Flexbox() {
    return (
        <>
            <div className="wrapper">
                <h2>Flexbox: </h2>
                <h4>justify-content, align-items, align-content: </h4>
                <div className="container container-custom jContent alItems alContent gaper">
                    <div className="item item-1">Item 1</div>
                    <div className="item item-2">Item 2</div>
                    <div className="item item-3">Item 3</div>
                </div>
                <h4>flex-wrap, align-content: </h4>
                <div className="container container-custom fwrap alContent">
                    <div className="item item-1">Item 1</div>
                    <div className="item item-2">Item 2</div>
                    <div className="item item-3">Item 3</div>
                    <div className="item item-1">Item 1</div>
                    <div className="item item-2">Item 2</div>
                    <div className="item item-3">Item 3</div>
                    <div className="item item-1">Item 1</div>
                    <div className="item item-2">Item 2</div>
                    <div className="item item-3">Item 3</div>
                    <div className="item item-1">Item 1</div>
                    <div className="item item-2">Item 2</div>
                    <div className="item item-3">Item 3</div>
                </div>
            </div>
        </>
    )
}

export default Flexbox;