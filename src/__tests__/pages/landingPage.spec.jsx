import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import LandingPage from "../../pages/LandingPage";

const apiMock = new MockAdapter(
  "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout"
);

describe("LandingPage", () => {
  apiMock
    .onPost("https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout")
    .replyOnce(400, {});
  it("should be able to timeout", async () => {
    render(<LandingPage info={false} setInfo={() => {}} />);

    const amountInput = screen.getAllByLabelText("Informe o valor da venda");
    // const installmentstInput = screen.getAllByLabelText("Em quantas parcelas");
    // const mdrtInput = screen.getAllByLabelText("Infome o percentual de MDR*");
    const buttonElement = screen.getByText("Enviar");

    fireEvent.change(amountInput, { target: { value: 10000 } });
    // fireEvent.change(installmentstInput, { target: { value: 2 } });
    // fireEvent.change(mdrtInput, { target: { value: 2 } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(amountInput).toHaveValue(10000);
      //   expect(installmentstInput).toHaveValue(2);
      //   expect(mdrtInput).toHaveValue(2);
    });
  });
});
