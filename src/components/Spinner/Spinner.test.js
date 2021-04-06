import { mount } from 'enzyme';
import { Spinner } from './Spinner';

describe('Spinner Component', () => {
  let props;

  const render = () => mount(<Spinner {...props} />);

  beforeEach(() => {
    props = {
      isVisible: true
    };
  });

  it('should be ok', () => {
    const spinner = render();
    console.log(spinner.debug());
    expect(spinner).toBeTruthy();
  });

  it('should not render fullScreen block', () => {
    const spinner = render();
    expect(spinner.find('.spinner').hasClass('fullScreen')).toEqual(false);
  });

  it('should render fullScreen block', () => {
    props.isFullScreen = true;
    const spinner = render();
    expect(spinner.find('.spinner').hasClass('fullScreen')).toEqual(true);
  });

  it('should render overlay', () => {
    const spinner = render();
    expect(spinner.find('.overlay').exists()).toEqual(true);
  });

  it('should render content block', () => {
    const spinner = render();
    expect(spinner.find('.content').exists()).toEqual(true);
  });

  it('should not render message block', () => {
    const spinner = render();
    expect(spinner.find('.message').exists()).toEqual(false);
  });

  it('should render message block', () => {
    props.message = 'test message';
    const spinner = render();
    expect(spinner.find('.message').exists()).toEqual(true);
    expect(spinner.find('.message').text()).toEqual('test message');
  });
});
