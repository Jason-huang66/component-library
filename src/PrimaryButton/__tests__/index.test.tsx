import { ButtonProps } from "antd"
import PrimaryButton from "..";
import { render } from "@testing-library/react";
import React from "react"
describe('PrimaryButto按钮', () => { 
  const buttonProps: ButtonProps = {
    loading: false,
    onClick: jest.fn()
  }
  it('正确渲染按钮', () => { 
    const buttonText = "点击按钮";
    const { getByRole } = render(
      <PrimaryButton {...buttonProps}>{buttonText}</PrimaryButton>
    )
    const buttonElement = getByRole('button');
    expect(buttonElement.textContent).toBe(buttonText);
  })

  it('正确渲染按钮默认type', () => { 
    const { getByRole } = render(
      <PrimaryButton {...buttonProps}></PrimaryButton>
    )
    const buttonElement = getByRole('button')
    expect(buttonElement.classList.contains('ant-btn-primary')).toBe(true)
  })
})