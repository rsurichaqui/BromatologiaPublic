import { TarjetaSaud } from './tarjeta.module';
export class Persona {
    public ID!: number;
    public strDni!: string;
    public strNombres!: string;
    public strApellidos!: string;
    public strNombreCompeto!: string;
    public strDireccion!: string;
    public strCentroTrabajo!: string;
    public dtmFechaNacimiento!: Date;
    public dtmFecharegistro!: Date;
    public intEdad!: number;
    public lisTarjetaSalud!: TarjetaSaud[];
}

export class PersonaResult {
    public bitRealizado!: boolean;
    public strCodigo!: string;
    public strMensaje!: string;
    public strValorRetorno!: string;
    public intFilasAfectadas!: number;
    public lisPersona!: Persona[];
}