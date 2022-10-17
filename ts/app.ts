interface IPayment {
    sum: number;
    from: number;
    to: number;

}
interface IPaymentRequest extends IPayment {}

enum PaymentStatus {
    Success = 'success',
    Failure = 'failed',
}

interface IDataSuccess extends  IPayment{
    databaseId: number,

}
interface IDataFailed {
    errorMessage: string,
    errorCode: number,

}

interface IResponseSuccess {
    status: PaymentStatus.Success,
    data: IDataSuccess,
}

interface IResponseFailed {
    status: PaymentStatus.Failure,
    data: IDataFailed,
}