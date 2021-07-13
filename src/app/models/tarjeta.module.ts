import { Persona } from './persona.model';
export class TarjetaSaud {
    public ID!: number;
    public strNumero!: string;
    public dtmFechaExpedicion!: Date;
    public dtmFechaVencimiento!: Date;
    public dtmFechaPago!: Date;
    public dtmFechaEmision!: Date;
    public strEstado!: string;
    public IDPersona!: number;
    public strCentroTrabajo!: string;
    public strNumeroRecibo!: string;
    public strDireccionD!: string;
    public strTramite!: string;
    public strNumeroDuplicado!: string;
    public intObservacionEstado!: string;
    public strObservacion!: string;
    public strSangre!: string;
    public dtmFechaEstado!: Date;
    public strManipulacion!: string;
    public strIDUsuario!: string;
    //public itmPersona : Persona;
}