import React from 'react';
import './styles.scss';

const Button = ({ name }: { name: string }) => {
  return (
    <button type='button' className={name}>
      Button
    </button>
  );
};

const Buttons = () => {
  return (
    <section className='ExampleButtons'>
      <div className='Buttons'>
        {/* <Button name='btn' /> */}
        <Button name='btn-primary' />
        <Button name='btn-secondary' />
        <Button name='btn-tertiary' />
        <Button name='btn-success' />
        <Button name='btn-warning' />
        <Button name='btn-danger' />
        <Button name='btn-dark' />
        <Button name='btn-gray' />
        <Button name='btn-white' />
        <Button name='btn-soft' />
        <Button name='btn-disable' />
      </div>
      <div className='ButtonsOutline'>
        {/* <Button name='btn-outline' /> */}
        <Button name='btn-outline-primary' />
        <Button name='btn-outline-secondary' />
        <Button name='btn-outline-tertiary' />
        <Button name='btn-outline-success' />
        <Button name='btn-outline-warning' />
        <Button name='btn-outline-danger' />
        <Button name='btn-outline-dark' />
        <Button name='btn-outline-gray' />
        <Button name='btn-outline-white' />
        <Button name='btn-outline-soft' />
        <Button name='btn-outline-disable' />
      </div>
      <div className='ButtonsLink'>
        {/* <Button name='btn-link' /> */}
        <Button name='btn-link-primary' />
        <Button name='btn-link-secondary' />
        <Button name='btn-link-tertiary' />
        <Button name='btn-link-success' />
        <Button name='btn-link-warning' />
        <Button name='btn-link-danger' />
        <Button name='btn-link-dark' />
        <Button name='btn-link-gray' />
        <Button name='btn-link-white' />
        <Button name='btn-link-soft' />
        <Button name='btn-link-disable' />
      </div>
    </section>
  );
};

export default Buttons;
