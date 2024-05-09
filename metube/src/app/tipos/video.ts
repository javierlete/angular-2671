export interface Video {
    id: number;
    foto: string;
    horas: number;
    minutos: number;
    segundos: number;
    titulo: string;
    descripcion: string;
    codigo: string;
    valoracion?: number;
    ratio?: '1x1' | '4x3' | '16x9' | '21x9';
}