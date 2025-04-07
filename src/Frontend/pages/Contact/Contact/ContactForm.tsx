import { useFormInput } from "../../../hooks/useFormInput";
import "./ContactForm.css";

export function ContactForm() {
  const { errors, handleBlur, handleFocus } = useFormInput();

  return (
    <form
      method="post"
      className="box-shadow__item form grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-5/6 p-6 lg:py-16 lg:px-28 mx-auto"
    >
      <div className="relative">
        <input
          name="nombre"
          id="name"
          className="p-4 w-full h-full"
          type="text"
          placeholder="Nombre *"
          required
          autoComplete="name"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors.nombre && (
          <p className="absolute left-0 -bottom-5 text-red-500 text-sm">
            {errors.nombre}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          name="apellido"
          id="last-name"
          className="p-4 w-full h-full"
          type="text"
          placeholder="Apellido *"
          required
          autoComplete="family-name"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors.apellido && (
          <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
            {errors.apellido}
          </span>
        )}
      </div>
      <div className="relative md:col-span-2">
        <select
          className="p-4 w-full h-full hover:cursor-pointer"
          name="País"
          id="country"
          required
          autoComplete="country"
          onBlur={handleBlur}
          onFocus={handleFocus}
        >
          <option value="">Selecciona tu país *</option>
          <option value="argentina">Argentina</option>
          <option value="bolivia">Bolivia</option>
          <option value="brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="colombia">Colombia</option>
          <option value="costa-rica">Costa Rica</option>
          <option value="ecuador">Ecuador</option>
          <option value="espana">España</option>
          <option value="el-salvador">El Salvador</option>
          <option value="guatemala">Guatemala</option>
          <option value="honduras">Honduras</option>
          <option value="mexico">México</option>
          <option value="nicaragua">Nicaragua</option>
          <option value="panama">Panamá</option>
          <option value="paraguay">Paraguay</option>
          <option value="peru">Perú</option>
          <option value="puerto-rico">Puerto Rico</option>
          <option value="republica-dominicana">República Dominicana</option>
          <option value="uruguay">Uruguay</option>
          <option value="venezuela">Venezuela</option>
          <option value="otro">Otro</option>
        </select>
        {errors["País"] && (
          <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
            {errors["País"]}
          </span>
        )}
      </div>
      <div className="relative">
        <input
          name="email"
          id="email"
          className="p-4 w-full h-full"
          type="email"
          placeholder="Correo electrónico *"
          autoComplete="email"
          required
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors.email && (
          <span className="absolute left-0 -bottom-5 text-sm text-red-500">
            {errors.email}
          </span>
        )}
      </div>
      <input
        name="phone-number"
        id="phone-number"
        className="p-4"
        type="text"
        placeholder="Número de teléfono"
      />

      <div className="relative md:col-span-2">
        <textarea
          name="mensaje"
          className="p-4 w-full h-full"
          placeholder="Mensaje *"
          id="message"
          rows={5}
          required
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors.mensaje && (
          <span className="absolute left-0 -bottom-5 text-sm text-red-500">
            {errors.mensaje}
          </span>
        )}
      </div>
      <button type="submit" className="md:col-span-2 btn__primary btn__lime">
        Enviar
      </button>
    </form>
  );
}
