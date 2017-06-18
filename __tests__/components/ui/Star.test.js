import Star from '../../../src/components/ui/Star'
import { shallow } from 'enzyme'

describe('<Star/> UI component', () => {
    it('renders default star', () => {
        expect(shallow(<Star/>).find('div.star').length).toBe(1);
    })
})