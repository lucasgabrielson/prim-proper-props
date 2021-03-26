import SilverWare from '../SilverWare/SilverWare';

function dinnerSupplies( props ) {
    return (
        <>
            <SilverWare count={props.guestList.length} />
        </>
    );
}

export default dinnerSupplies;