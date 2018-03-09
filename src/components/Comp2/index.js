import styled from 'styled-components';

import Comp1 from '../Comp1';

const Comp2 = styled(() =>(
    <React.Fragment>
        <Comp1 />
        <span>Hello</span>
    </React.Fragment>
));

export default Comp2;