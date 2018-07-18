import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm.jsx';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
 const wrapper = shallow(<ExpenseForm />);
 expect(wrapper).toMatchSnapshot();
});

// Should render ExpenseForm data

test('Should render ExpenseForm correctly with expense data', () => {
 const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
 expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
 const wrapper = shallow(<ExpenseForm />);
 wrapper.find('form').simulate('submit', {
  preventDefault: () => {}
 });
 expect(wrapper.state('error').length).toBeGreaterThan(0);
 expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
 const value = 'New description';
 const wrapper = shallow(<ExpenseForm />);
 wrapper
  .find('input')
  .at(0)
  .simulate('change', {
   target: { value }
  });
 expect(wrapper.state('description')).toBe(value);
});