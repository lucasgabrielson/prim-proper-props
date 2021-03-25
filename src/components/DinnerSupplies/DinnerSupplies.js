import SilverWare from '../SilverWare/SilverWare';

function dinnerSupplies( props ) {
    return (
        <>
            <SilverWare name="Spoons" count={props.guestList.length} />
            <SilverWare name="Forks" count={props.guestList.length} />
            <SilverWare name="Knives" count={props.guestList.length} />
        </>
    );
}

export default dinnerSupplies;