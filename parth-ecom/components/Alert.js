import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { alertService} from 'services';

export function  Alert() {

    const router = useRouter();
    const [alert, setAlert] = useState(null);

    useEffect( ()=> {
        const subscription = alertService.alert.subscription(alert => setAlert(alert));

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        alertService.clear();
    }, [router]); 

    if (!alert) return null;

    return (
        <div>
            <div className="m-3">
                <div className={`alert alert-dismissible ${alert.type}`}>
                    {alert.message}
                    <button type="button" className="bg-red-300" onClick={ () => alertService.clear()}> X </button>
                </div>
            </div>
        </div>
    )

}