function BtnItem({ item, handlebtn }) {
    const mystyle = {
        width: "30%",
        marginLeft: "5px",
        marginTop: "5px",
        height: "50px"



    }
    return (
        <>
            <button type="button" value={item} className={'--bs-info'} style={mystyle} onClick={handlebtn}>{item}</button>
        </>
    );
}
export default BtnItem;