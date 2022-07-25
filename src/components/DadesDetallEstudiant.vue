<template>
  <div>
    <h2 class="contraer">Dades personals</h2>

    <div class="unit six-of-seven primera">
      <div class="unit one-of-four primera">
        <label for="nom">Nom</label>
        <input type="text" id="nom" name="nom" class="total" value="XAVIER" />
      </div>
      <div class="unit one-of-four">
        <label for="cognom1">Primer cognom</label>
        <input
          type="text"
          id="cognom1"
          name="cognom1"
          class="total"
          value="CORRALES"
        />
      </div>
      <div class="unit one-of-four">
        <label for="cognom2">Segon cognom</label>
        <input
          type="text"
          id="cognom2"
          name="cognom2"
          class="total"
          value="ROVIRA"
        />
      </div>
      <div class="unit one-of-four">
        <label for="genere">Gènere</label>
        <select id="genere" name="genere" class="total">
          <option>Home</option>
        </select>
      </div>
      <div class="unit one-of-four primera">
        <label for="tipus_doc">Tipus document</label>
        <select id="tipus_doc" name="tipus_doc" class="total">
          <option>DNI/NIF</option>
          <option>Passaport</option>
          <option>Targeta de residència</option>
        </select>
      </div>
      <div class="unit one-of-four">
        <label for="dni">Núm. doc. identitat</label>
        <input
          type="text"
          id="dni"
          name="dni"
          class="total"
          value="12345678H"
        />
      </div>
      <div class="unit one-of-four">
        <label for="data_alta">Data alta</label>
        <input
          type="text"
          id="data_alta"
          name="data_alta"
          class="total desactivado"
          value="21/07/2003"
          readonly
        />
      </div>
      <div class="unit one-of-four">
        <label for="data">Data naix.</label>
        <input
          type="text"
          id="data"
          name="data"
          class="icono"
          value="14/09/1985"
        />
        <img src="img/icono_calendario.png" width="16" height="16" />
      </div>
      <div class="unit one-of-four primera">
        <label for="pais">País naix.</label>
        <select id="pais" name="pais" class="total">
          <option>Espanya</option>
        </select>
      </div>
      <div class="unit one-of-four">
        <label for="nac">Nacionalitat</label>
        <select id="nac" name="nac" class="total">
          <option>Espanyola</option>
        </select>
      </div>
      <div class="unit one-of-four">
        <label for="prov">Província naix.</label>
        <select id="prov" name="prov" class="total">
          <option>Barcelona</option>
        </select>
      </div>
      <div class="unit one-of-four">
        <label for="mun">Municipi naix.*</label>
        <select id="mun" name="mun" class="total">
          <option>VILASSAR DE MAR</option>
        </select>
      </div>
      <div class="unit one-of-two primera">
        <label for="mun">Municipi si estranger/Info. add.</label>
        <input type="text" id="mun" name="mun" class="total" />
      </div>
      <div class="unit one-of-four">
        <label for="comarca">Comarca naix.</label>
        <input
          type="text"
          id="comarca"
          name="comarca"
          class="total desactivado"
          value="MARESME"
        />
      </div>
      <div class="unit one-of-four">
        <label for="mobil">Telèfon mòbil</label>
        <input
          type="text"
          id="mobil"
          name="mobil"
          class="total"
          value="665444333"
          maxlength="15"
        />
      </div>
      <div class="unit one-of-four primera">
        <label for="idioma_c" title="Aquí la descripció"
          >Idioma aplicació* <img src="img/info.gif" width="16" height="12"
        /></label>
        <select id="idioma_c" name="idioma_c" class="total">
          <option>Català</option>
        </select>
      </div>
      <div class="unit one-of-two">
        <label for="tipus_est">Tipus estudiant</label>
        <select id="tipus_est" name="tipus_est" class="total" readonly>
          <option>Estudiant oficial, enrolat a un Programa d'Estudis</option>
        </select>
      </div>
      <div class="unit one-of-four">
        <label for="estat">Estat persona*</label>
        <select id="estat" name="estat" class="total" readonly>
          <option>Actiu</option>
        </select>
      </div>

      <h3>Gestió d'altres documents identificatius</h3>

      <div class="unit one-of-four primera">
        <label for="tipus_doc"
          >Tipus document certificats
          <img
            src="img/info.gif"
            title="Es pot introduir un altre document d'identitat en cas que sigui necessari per a certificats acadèmics."
        /></label>
        <select id="tipus_doc" name="tipus_doc" class="total">
          <option>Passaport</option>
          <option>Document identitat país origen</option>
        </select>
      </div>
      <div class="unit one-of-four">
        <label for="dni">Núm. doc. ident. certificats</label>
        <input
          type="text"
          id="dni"
          name="dni"
          class="total"
          value="AM3456789"
        />
      </div>
      <div class="clear"></div>
      <div class="unit one-of-four primera">
        <label for="nie">NIE</label>
        <input
          type="text"
          id="nie"
          name="nie"
          value="AM3456789"
          class="total"
          disabled
        />
      </div>
      <div class="unit one-of-four">
        <label for="tipus_nie">Tipus NIE</label>
        <select id="tipus_nie" name="tipus_nie" class="total">
          <option></option>
          <option>NIE ciutadà de la Unió</option>
          <option>NIE familiar ciutadà de la Unió</option>
          <option>NIE resident llarga durada</option>
        </select>
      </div>

      <br /><br />
    </div>

    <div class="unit one-of-seven">
      <br />
      <img
        src="img/foto2.jpg"
        alt="foto de mi perfil"
        width="100"
        height="120"
        class="foto"
      />
      <br /><br />
      <ul>
        <li>
          <a href="https://identitatdigital.upc.edu/myid" target="_blank"
            >Afegeix o canvia la foto </a
          ><img
            src="img/mini_externo.png"
            width="10"
            height="10"
            alt="Obrir en una finestra nova"
          />
        </li>
      </ul>

      <div class="clear"></div>
      <br /><br />
      <input
        class="boton b_azul abajo"
        type="submit"
        id="boton"
        name="boton"
        value="Genera etiqueta"
      />
    </div>

    <h2 class="contraer">Domicili familiar</h2>
    <div class="unit one-of-five primera">
      <label for="pais">País*</label>
      <select id="pais" name="pais" class="total">
        <option>ESPANYA</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="provincia">Província*</label>
      <select id="provincia" name="provincia" class="total">
        <option>BARCELONA</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="municipi">Municipi*</label>
      <select id="municipi" name="municipi" class="total">
        <option>ARGENTONA</option>
      </select>
    </div>
    <div class="unit two-of-five">
      <label for="municipi_est">Municipi si estranger/Info. add.</label>
      <input type="text" id="municipi_est" name="municipi_est" class="total" />
    </div>
    <div class="unit one-of-five primera">
      <label for="comarca">Comarca</label>
      <input
        type="text"
        id="comarca"
        name="comarca"
        class="total desactivado"
        value="MARESME"
      />
    </div>
    <div class="unit one-of-five">
      <label for="codi_postal">Codi postal*</label>
      <input
        type="text"
        id="codi_postal"
        name="codi_postal"
        class="total"
        value="08310"
      />
    </div>
    <div class="unit one-of-five">
      <label for="tfn">Telèfon*</label>
      <input
        type="text"
        id="tfn"
        name="tfn"
        class="total"
        value="932211234"
        maxlength="15"
      />
    </div>
    <div class="clear"></div>
    <div class="unit one-of-five primera">
      <label for="tipus_via">Tipus via*</label>
      <select id="tipus_via" name="tipus_via" class="total">
        <option>CARRER</option>
      </select>
    </div>
    <div class="unit two-of-five">
      <label for="via">Nom via*</label>
      <input type="text" id="via" name="via" class="total" value="PAU CLARIS" />
    </div>
    <div class="unit one-of-five">
      <label for="num">Número*</label>
      <input type="text" id="num" name="num" class="total" value="102" />
    </div>
    <div class="unit one-of-five">
      <label for="escala">Escala, pis, porta</label>
      <input type="text" id="escala" name="escala" class="total" value="3R" />
    </div>
    <div class="unit span-grid primera">
      <br />
      <ul>
        <li>
          <a
            href="https://www.correos.es/es/es/herramientas/codigos-postales/detalle"
            target="_blank"
            >Consulta la llista de codis postals </a
          ><img
            src="img/mini_externo.png"
            width="10"
            height="10"
            alt="Obrir en una finestra nova"
          />
        </li>
      </ul>
      <div class="clear"></div>
      <p>
        <input
          class="boton b_azul"
          type="submit"
          id="boton"
          name="boton"
          value="Copia dades"
        />
      </p>
    </div>

    <h2 class="contraer">Domicili durant el curs</h2>
    <div class="unit one-of-five primera">
      <label for="tipus_res">Tipus residència*</label>
      <select id="tipus_res" name="tipus_res" class="total">
        <option>Domicili patern</option>
      </select>
    </div>
    <div class="clear"></div>
    <div class="unit one-of-five primera">
      <label for="pais">País*</label>
      <select id="pais" name="pais" class="total">
        <option>ESPANYA</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="provincia">Província*</label>
      <select id="provincia" name="provincia" class="total">
        <option>BARCELONA</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="municipi">Municipi*</label>
      <select id="municipi" name="municipi" class="total">
        <option>ARGENTONA</option>
      </select>
    </div>
    <div class="unit two-of-five">
      <label for="municipi_est">Municipi si estranger/Info. add.</label>
      <input type="text" id="municipi_est" name="municipi_est" class="total" />
    </div>
    <div class="unit one-of-five primera">
      <label for="comarca">Comarca</label>
      <input
        type="text"
        id="comarca"
        name="comarca"
        class="total desactivado"
        value="MARESME"
      />
    </div>
    <div class="unit one-of-five">
      <label for="codi_postal">Codi postal*</label>
      <input
        type="text"
        id="codi_postal"
        name="codi_postal"
        class="total"
        value="08310"
      />
    </div>
    <div class="unit one-of-five">
      <label for="tfn">Telèfon*</label>
      <input
        type="text"
        id="tfn"
        name="tfn"
        class="total"
        value="932211234"
        maxlength="15"
      />
    </div>
    <div class="clear"></div>
    <div class="unit one-of-five primera">
      <label for="tipus_via">Tipus via*</label>
      <select id="tipus_via" name="tipus_via" class="total">
        <option>CARRER</option>
      </select>
    </div>
    <div class="unit two-of-five">
      <label for="via">Nom via*</label>
      <input type="text" id="via" name="via" class="total" value="PAU CLARIS" />
    </div>
    <div class="unit one-of-five">
      <label for="num">Número*</label>
      <input type="text" id="num" name="num" class="total" value="102" />
    </div>
    <div class="unit one-of-five">
      <label for="escala">Escala, pis, porta</label>
      <input type="text" id="escala" name="escala" class="total" value="3R" />
    </div>
    <br /><br />

    <h2 class="contraer">Adreça electrónica</h2>

    <div class="alerta alerta-info">
      Les comunicacions de la universitat s’envien a la teva adreça de correu de
      la UPC.<br />
      Pel que respecta a les adreces existents fins al curs 2019-2020, es
      mantindrà un àlies de la teva adreça @estudiant.upc.edu (o
      @est.fib.upc.edu) cap a la nova adreça fins el 31 de gener del 2021 per
      tal que puguis notificar aquest canvi als teus contactes.
    </div>
    <br />

    <div class="unit one-of-two primera">
      <label for="adreca">Adreça UPC</label>
      <input
        type="text"
        id="adreca"
        name="adreca"
        class="total desactivado"
        value="xavier.corrales@upc.edu"
        readonly
      />
    </div>
    <div class="clear"></div>
    <div class="unit one-of-two primera">
      <label for="adreca">Adreça personal*</label>
      <input
        type="text"
        id="adreca2"
        name="adreca2"
        class="total desactivado"
        value="xavier.corrales@hotmail.com"
        readonly
      />
    </div>
    <div class="unit one-of-two">
      <br />
      <input
        class="boton b_azul"
        type="submit"
        id="boton"
        name="boton"
        value="Canvia adreça"
      />
    </div>

    <div class="unit one-of-five primera">
      <label for="usuari">Usuari intranets UPC</label>
      <input
        type="text"
        id="usuari"
        name="usuari"
        value="xavier corrales rovira"
        class="total"
        disabled
      />
    </div>
    <div class="unit one-of-five">
      <label for="ae">Vol rebre info. via a/e?</label>
      <select id="ae" name="ae" class="total">
        <option>Sí</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="correu">Vols rebre SMS?</label>
      <select id="correu" name="correu" class="total">
        <option>No</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="acces">Accès web</label>
      <select id="acces" name="acces" class="total">
        <option>Sí</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="estat_est">Estat estudiant*</label>
      <select id="estat_est" name="estat_est" class="total">
        <option>Actiu</option>
      </select>
    </div>
    <br /><br />

    <h2 class="contraer">Dades econòmiques</h2>

    <div class="unit two-of-five primera">
      <label for="fn">Família nombrosa*</label>
      <select id="fn" name="fn" class="total">
        <option>No família nombrosa</option>
        <option>Fam. monoparental general</option>
      </select>
    </div>
    <div class="unit one-of-five">
      <label for="dc">Data caducitat</label>
      <input type="text" id="dc" name="dc" class="icono" value="14/09/1985" />
      <img src="img/icono_calendario.png" width="16" height="16" />
    </div>
    <div class="unit one-of-five">
      <label for="de">Data expedició</label>
      <input type="text" id="de" name="de" class="icono" value="14/09/1985" />
      <img src="img/icono_calendario.png" width="16" height="16" />
    </div>
    <div class="unit one-of-five">
      <label for="dv">Data validació</label>
      <input type="text" id="dv" name="dv" class="icono" value="14/09/1985" />
      <img src="img/icono_calendario.png" width="16" height="16" />
    </div>
    <div class="unit one-of-five primera">
      <label for="num_fn">Núm. carnet FN</label>
      <input type="text" id="num_fn" name="num_fn" class="total" />
    </div>
    <div class="unit one-of-five">
      <label for="nif_tit">NIF titular</label>
      <input type="text" id="nif_tit" name="nif_tit" class="total" />
    </div>
    <div class="unit one-of-five">
      <label for="nss">Núm. Seguretat Social</label>
      <input
        type="text"
        id="nss"
        name="nss"
        value="081274231876"
        class="total"
      />
    </div>
    <div class="clear"></div>
    <div class="unit four-of-five primera">
      <div class="unit one-of-three primera">
        <label for="titular_dev">Titular devolució</label>
        <input
          type="text"
          id="titular_dev"
          name="titular_dev"
          value="NOM COGNOM1 COGNOM2"
          class="total"
        />
      </div>
      <div class="unit two-of-three">
        <label for="iban">IBAN devolució</label>
        <input
          type="text"
          id="iban1"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
        />
        <input
          type="text"
          id="iban2"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
        />
        <input
          type="text"
          id="iban3"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
        />
        <input
          type="text"
          id="iban4"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
        />
        <input
          type="text"
          id="iban5"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
        />
        <input
          type="text"
          id="iban6"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
        />
        <input type="text" id="iban7" name="iban" size="4" maxlength="4" />
        <input type="text" id="iban8" name="iban" size="4" maxlength="4" />
        <input type="text" id="iban9" name="iban" size="4" maxlength="4" />
      </div>

      <div class="unit one-of-three primera">
        <label for="titular_sepa">Titular SEPA</label>
        <input
          type="text"
          id="titular_sepa"
          name="titular_sepa"
          value="NOM COGNOM1 COGNOM2"
          class="total"
          disabled
        />
      </div>
      <div class="unit two-of-three">
        <label for="iban">IBAN SEPA</label>
        <input
          type="text"
          id="iban1"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban2"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban3"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban4"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban5"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban6"
          name="iban"
          value="1234"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban7"
          name="iban"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban8"
          name="iban"
          size="4"
          maxlength="4"
          disabled
        />
        <input
          type="text"
          id="iban9"
          name="iban"
          size="4"
          maxlength="4"
          disabled
        />
      </div>
    </div>
    <div class="unit one-of-five doble_linea abajo">
      <span
        ><a href="#" target="_blank">Alta ordre SEPA</a>&nbsp;<img
          src="img/mini_ventana.png"
          width="10"
          height="10"
          title="Obre en una finestra nova" /></span
      ><br />
      <span class="pdf">Ordre SEPA</span>
    </div>

    <br /><br />
    <div class="linea"></div>
    <div class="derecha">
      <input
        class="boton b_rojo"
        type="submit"
        id="boton"
        name="boton"
        value="Cancel·la"
      />
      <input
        class="boton b_azul"
        type="submit"
        id="boton"
        name="boton"
        value="Guarda"
      />
    </div>
    <div class="clear"></div>
    <div class="alerta alerta-ok">Dades guardades correctament</div>

    <br /><br /><br /><br />

    <div class="unit span-grid" id="pie">
      <span class="pequeño"
        >©
        <a href="http://www.upc.edu" target="_blank"
          >UPC
          <img
            src="img/mini_externo.png"
            width="10"
            height="10"
            alt="Obrir en una finestra nova" /></a
        >. Universitat Politècnica de Catalunya. BarcelonaTech</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DadesDetallEstudiant",
};
</script>

<style scoped></style>
