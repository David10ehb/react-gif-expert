import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GirGridItem } from '../../components/GirGridItem';


describe('primera prueba solo de react', () => {

    const title = 'un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GirGridItem title={title} img={url} />);

    test('Prueba de la component GifGridItem', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Prueba existente de un <p>', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Prueba existente de un <img>', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Prueba existente de un <div>', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })


});
