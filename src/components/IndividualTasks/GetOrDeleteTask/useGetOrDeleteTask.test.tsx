import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GetOrDeleteTask from './GetOrDeleteTask';

configure({ adapter: new Adapter() });

let shallowComponent: any;
let mountComponent: any;

const renderShallowContact = () => {
  return shallow(<GetOrDeleteTask></GetOrDeleteTask>);
};

const renderMountContact = () => {
  return mount(<GetOrDeleteTask></GetOrDeleteTask>);
};

describe('dom tests', () => {
  beforeAll(() => {
    shallowComponent = renderShallowContact();
    mountComponent = renderMountContact();
  });

  it('renders taskId input', () => {
    expect(shallowComponent.find('#abxTaskId')).toBeTruthy();
  });

  it('renders get task button', () => {
    expect(shallowComponent.find('#deleteTask')).toBeTruthy();
  });
  it('renders get task button', () => {
    expect(shallowComponent.find('#getTask')).toBeTruthy();
  });

  it('delete button text', () => {
    const button = shallowComponent.find('#deleteTask');
    expect(button.text()).toBe('Delete task');
  });
  it('get task button text', () => {
    const button = shallowComponent.find('#getTask');
    expect(button.text()).toBe('Get task');
  });

  it('mount renders taskId input', () => {
    expect(mountComponent.find('input#abxTaskId')).toBeTruthy();
  });

  it('mount renders get task button', () => {
    expect(mountComponent.find('button#deleteTask')).toBeTruthy();
  });
  it('mount renders get task button', () => {
    expect(mountComponent.find('button#getTask')).toBeTruthy();
  });

  it('mount delete button text', () => {
    expect(mountComponent.find('button#deleteTask').text()).toBe('Delete task');
  });
  it('mount get task button text', () => {
    expect(mountComponent.find('button#getTask').text()).toBe('Get task');
  });

  it('shallow changes taskId input', () => {
    const input = shallowComponent.find('#abxTaskId');
    input.simulate('change', { target: { value: 'Hello', name: 'abxTaskId' } });
    console.log(shallowComponent.debug());
    expect(shallowComponent.find('#abxTaskId').prop('value')).toEqual('Hello');
  });

  it('mount changes taskId input', () => {
    const input = mountComponent.find('input#abxTaskId');
    input.simulate('change', { target: { value: 'Hello', name: 'abxTaskId' } });
    expect(mountComponent.find('input#abxTaskId').prop('value')).toEqual('Hello');
  });
});
