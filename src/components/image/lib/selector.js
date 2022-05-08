import Preview from './components/inspector/preview';
import SelectorButton from './components/inspector/selectorButton';
import Lazyload from './components/inspector/lazyLoad';

const Selector = (props) => {
    const {
        attributes: {
            mediaURL,
        }
    } = props;

    return (
        <>
            <SelectorButton {...props}/>
            {mediaURL && <Preview {...props}/>}
            <Lazyload {...props} />
        </>
    );
}

export { Selector };