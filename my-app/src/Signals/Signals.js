import React from "react";
import { signal, effect, computed } from "@preact/signals-react";


const count = signal(0);
const double = computed(() => count.value * 2);
console.log('computed',double);
const Signals = () => {
    effect(() => console.log('count', count));
    return (
        <>
            <h1>{double}</h1>
            <button style={{ width: '50%' }} onClick={() => count.value++}>{count}</button>

        </>
    );
}
export default Signals;