import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);

    useEffect(() => {
        const cb = (message: number) => {
            setMessage(message);
        };
        subscribe(props.sourceId, cb);
        return () => {
            unsubscribe(props.sourceId, cb);
            setMessage(-1);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
