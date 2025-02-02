const { render, renderHook } = require("@testing-library/react");
const { useCounter } = require("../../hooks/useCounter");
const { act } = require("react");


describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const {result} =renderHook(() => useCounter());
        const {counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

        
    })

    test('debe de tener el counter en 100', () => {

        const {result} =renderHook(() => useCounter(100));
        const {counter} = result.current;

        expect(counter).toBe(100);
        
    })

    test('debe de incrementar el counter en 1', () => {

        const {result} =renderHook(() => useCounter());
        const {counter, increment } = result.current;



        act(() => { 
            increment() 
            increment(2)
        });

        expect(result.current.counter).toBe(13);
    })

    test('debe de decrementar el counter en 1', () => {

        const {result} =renderHook(() => useCounter());
        const {counter, decrement } = result.current;

        act(() => { 
            decrement() 
            decrement(2)
        });

        expect(result.current.counter).toBe(7);
    })

    test('debe de resetear el counter', () => {

        const {result} =renderHook(() => useCounter());
        const {counter, increment, reset } = result.current;

        act(() => { 
            increment() 
            increment(2)
            reset()
        });

        expect(result.current.counter).toBe(10);
    })
  
})
