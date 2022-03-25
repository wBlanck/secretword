import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../test/testUtils";
import Input from "./Input";

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Input {...setupProps} />);
};

test("renders without error", () => {
  let wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");

  expect(component.length).toBe(1);
});
