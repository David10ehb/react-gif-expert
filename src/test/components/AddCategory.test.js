import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas al component AddCategory', () => {

    const setcategories = jest.fn(); //
    let wrapper;

    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow(
            <AddCategory setcategories={setcategories} />
        );
    })


    test('comprobando wrappe', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto inputs simulando un change', () => {
        const input = wrapper.find('input');
        const value = 'mundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('no debe de llamar la  informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect( setcategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar setcategories y limpiar la caja de texto', () => {
        const value = 'mundo';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect( setcategories ).toHaveBeenCalled();

        expect(input.prop('value')).toBe('');

    });



});
