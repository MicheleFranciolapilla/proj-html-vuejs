// Importazione della funzione reactive
import { reactive } from "vue";
export const store = reactive(
    {
        // Booleano che riflette la condizione di scroll verticale della pagina
        is_scrolled     : false,
    })