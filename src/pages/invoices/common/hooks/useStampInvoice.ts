import { Settings } from '$app/common/interfaces/company.interface';
import { Invoice } from '$app/common/interfaces/invoice';
import { request } from '$app/common/helpers/request';
import { toast } from '$app/common/helpers/toast/toast';
import { endpoint } from '$app/common/helpers';

interface Props {
    invoice: Invoice ;
    settingsCompany: Settings;
    openModal: boolean;
}

export default function useStampInvoice({ invoice, settingsCompany, openModal}: Props) {
   console.log(invoice);
   console.log(settingsCompany);

   toast.processing();

    request('POST', endpoint("/api/v1/factura/facturar"), {
        invoice: invoice,
        settingsCompany: settingsCompany
    }).then((response) => {
        toast.success('success');
        openModal = false
    }
    );
   
}