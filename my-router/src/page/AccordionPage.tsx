import { useState } from 'react';
import {Accordion} from '../component';

export const AccordionPage = () => {
    const [items, _setItems] = useState([{label: '1st label', content: '1st content'}, {label: '2nd label', content: '2nd content'}]);

    return <Accordion items={items} />;
}

export default AccordionPage;