import BtnItem from "./BtnItem";

const BtnDisplay = ({ handlbutn }) => {
    let btn = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "C", "=", `←`]
    const mystyle = {
        width: "70%",
        margin: "auto",
        marginTop: "10px"
    }
    return (
        <>
            <div style={mystyle}>
                {btn.map((item) => <BtnItem
                    item={item}

                    handlebtn={handlbutn}
                ></BtnItem>

                )

                }
            </div>
        </>
    );
}
export default BtnDisplay;