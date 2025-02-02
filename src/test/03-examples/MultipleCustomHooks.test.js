import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../03-examplesBraking"
import { useCounter, useFetch } from "../../hooks"

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHoosk/>', () => {


    const mockIncrement=jest.fn()

    useCounter.mockReturnValue({
       counter:1,
       increment:mockIncrement

   })

   beforeEach(()=>{
       jest.clearAllMocks()
    })
  
    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        })

        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('BreakingBad Quotes'))

        const nextButton=screen.getByRole('button',{name:'Next quote'}) 
        expect (nextButton.disabled).toBeTruthy();

       // screen.debug()

    })

    test('debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data:[{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading:false,
            hasError:null
        })
        
        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();  

        
        const nextButton=screen.getByRole('button',{name:'Next quote'})
        expect (nextButton.disabled).toBeFalsy();
        screen.debug()

    })

    test('debe de llamar a la funcion de incrementar', () => {

        
        
         useFetch.mockReturnValue({
            data:[{author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading:false,
            hasError:null
        })



        render(<MultipleCustomHooks/>)
        const nextButton=screen.getByRole('button',{name:'Next quote'})

        fireEvent.click(nextButton)

        expect(mockIncrement).toHaveBeenCalled()



    })


})