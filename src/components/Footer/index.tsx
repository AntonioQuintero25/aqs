import { useTranslation } from "react-i18next";

export default function Footer(){
    const { t } = useTranslation();
    return <footer className="container-fluid text-white bg-dark-green">
        <div className="row justify-content-center">
            <div className="col-11 border-top text-center py-4">
                <p className="m-0">{t('textofooter')}</p>
            </div>
        </div>
    </footer>
}