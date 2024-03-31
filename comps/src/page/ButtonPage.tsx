import {Button} from '../component';
import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';

export const ButtonPage = () => {
    const handleClick = () => {
        console.log('hey you clicked');
    }
    
    return (
        <div>
            <Button onClick={handleClick} outline danger><GoDatabase /> Danger</Button>
            <Button onClick={handleClick} outline secondary><GoDatabase /> Secondary</Button>
            <Button onClick={handleClick} success><GoBell />Success</Button>
            <Button onClick={handleClick} primary> <GoCloud />Primary</Button>
            <Button onClick={handleClick} outline warning rounded>Warning</Button>
        </div>
    )
}

export default ButtonPage;