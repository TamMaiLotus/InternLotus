function GridColumn() {
    return (
        <>
            <div className="wrapper">
                <h2>Wrong example of diving grid column:</h2>
                <div class="row">
                        <div class="col-3 box">
                            <p>25%</p>
                        </div>
                        <div class="col-5 box">
                            <p>42%</p>
                        </div>
                </div>
            </div>

            <div className="wrapper">
                <h2>Right example of diving grid column:</h2>
                <div class="row">
                        <div class="col-3 box">
                            <p>25%</p>
                        </div>
                        <div class="col-9 box">
                            <p>42%</p>
                        </div>
                </div>
            </div>
        </>
    );
}

export default GridColumn;
