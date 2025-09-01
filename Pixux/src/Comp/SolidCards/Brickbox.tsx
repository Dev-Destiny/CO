import Card from "./Brick";


function BrickBox() {
    return (
        <div className="bg-[#dbecfc] flex gap-[1rem] p-5 w-fit rounded-xl mt-10 m-auto">
            <Card img="vite.svg" text="VITE" />
            <Card img="react.svg" text="REACT" />
            <Card img="More-icon.svg" text="MORE"/>
        </div>
    )
}

export default BrickBox;