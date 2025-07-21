'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const InformacionFinanciera = () => {
  const [activeTab, setActiveTab] = useState('presupuesto');
  const [expandedYear, setExpandedYear] = useState(null);

  // DATOS FIJOS CON LINKS REALES DESDE TU HTML
  const documentosConLinks = {
    presupuesto: {
      2025: [
        { titulo: 'Acuerdo 17 de 2024', url: 'https://electrohuila.net/wp-content/uploads/2025/03/Acuerdo-17-de-2024.pdf' }
      ],
      2024: [
        { titulo: 'Presupuesto 2024', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ACUERDO-21-DE-2023.pdf' }
      ],
      2023: [
        { titulo: 'Presupuesto 2023', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ACUERDO-16-DE-2022.pdf' }
      ],
      2022: [
        { titulo: 'Descripción de los ingresos', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Descripcion-de-los-ingresos-1.pdf' },
        { titulo: 'Presupuesto 2022', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Acuerdo-15-Presupuesto-2022.pdf' }
      ],
      2021: [
        { titulo: 'Ejecución ingresos 2021', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Ejecucion-ingresos-2021.pdf' },
        { titulo: 'Ejecución gastos 2021', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Ejecucion-gastos-2021.pdf' },
        { titulo: 'Acuerdo 02 – Modificación', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Acuerdo-02-Modificacion.pdf' },
        { titulo: 'Acuerdo 01 – Modificación', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Acuerdo-01-Modificacion.pdf' },
        { titulo: 'Descripción de los ingresos', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Descripcion-de-los-ingresos.pdf' },
        { titulo: 'Ejecución presupuestal 2021', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Ejecucion-presupuestal-2021.pdf' },
        { titulo: 'Presupuesto 2021', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Acuerdo-No.-15-Presupuesto-2021.pdf' }
      ]
    },
    estados: {
      2025: [
        { titulo: 'Estado de resultados enero 2025', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-RESULTADOS-a-31-ENERO.pdf' },
        { titulo: 'Estado de Situación Financiera enero 2025', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-SITUACION-FINANCIERA-enero.pdf' },
        { titulo: 'Estado de resultados marzo 2025', url: 'https://electrohuila.net/wp-content/uploads/2025/05/ESTADO-DE-RESULTADOS-DEL-1-ENERO-AL-31-DE-MARZO-.pdf' },
        { titulo: 'Estado de Situación Financiera marzo 2025', url: 'https://electrohuila.net/wp-content/uploads/2025/05/ESTADO-DE-SITUACION-FINANCIERA-A-MARZO-.pdf' },
        { titulo: 'Estado de resultados febrero 2025', url: 'https://electrohuila.net/wp-content/uploads/2025/07/ER-1-ENE-AL-28-FEB.pdf' },
        { titulo: 'Estado de Situación Financiera febrero 2025', url: 'https://electrohuila.net/wp-content/uploads/2025/07/ESF-A-FEBRERO.pdf' },
        { titulo: 'Estado de resultados abril 2025', url: 'https://electrohuila.net/wp-content/uploads/2025/07/ER-1-ENE-AL-30-ABR.pdf' },
        { titulo: 'Estado de Situación Financiera abril 2025', url: 'https://electrohuila.net/wp-content/uploads/2025/07/ER-1-ENE-AL-30-ABR.pdf' }
      ],
      2024: [
        { titulo: 'Estados Financieros Certificados, Dictaminados y Notas 2024', url: 'https://electrohuila.net/wp-content/uploads/2025/04/Estados-Financieros-Certificados-y-Notas-Electrificadora-del-Huila-S.A.-E.F.-31-diciembre-2024.pdf' },
        { titulo: 'Estado de resultados noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-RESULTADOS-a-noviembre-pdf.pdf' },
        { titulo: 'Estado de situación Financiera noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-SITUACION-FINANCIERA-noviembre-.pdf' },
        { titulo: 'Estado de resultados octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-SITUACION-FINANCIERA-oct.pdf' },
        { titulo: 'Estado de situación Financiera octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-SITUACION-FINANCIERA-oct.pdf' },
        { titulo: 'Estado de situación Financiera agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-SITUACION-FINANCIERA-agosto.pdf' },
        { titulo: 'Estado de resultados agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-RESULTADOS-agosto.pdf' },
        { titulo: 'Estado de situación Financiera septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-SITUACION-FINANCIERA-sept-2024-.pdf' },
        { titulo: 'Estado de resultados septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-RESULTADOS-sept-2024.pdf' },
        { titulo: 'Estado de situación Financiera julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/EF-Julio.pdf' },
        { titulo: 'Estado de resultados julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-1-ENERO-AL-31-JULIO.pdf' },
        { titulo: 'Estado de situación Financiera junio', url: 'https://electrohuila.net/wp-content/uploads/2024/08/Estado-de-Situacion-Financiera-junio-2024.pdf' },
        { titulo: 'Estado de resultados junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-DEL-01-ENERO-AL-30-JUNIO.pdf' },
        { titulo: 'Estado de situación Financiera mayo', url: 'https://electrohuila.net/wp-content/uploads/2024/07/EF-MAYO.pdf' },
        { titulo: 'Estado de resultados mayo', url: 'https://electrohuila.net/wp-content/uploads/2024/07/ER-DEL-1-ENERO-AL-31-DE-MAYO.pdf' },
        { titulo: 'Estado de situación Financiera abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-ABRIL-2024.pdf' },
        { titulo: 'Estado de resultados abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-ABRIL-2024.pdf' },
        { titulo: 'Estado de situación Financiera enero-marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-SITUACION-FINANCIRA-A-MARZO.pdf' },
        { titulo: 'Estado de resultados enero-marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADO-DE-RESULTDOS-DEL-1-DE-ENERO-31-DE-MARZO.pdf' },
        { titulo: 'Estado de situación Financiera febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/EF-A-FEBRERO.pdf' },
        { titulo: 'Estado de resultados febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-1-AL-28-FEBRERO.pdf' },
        { titulo: 'Estado de situación Financiera enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/EF-A-ENERO.pdf' },
        { titulo: 'Estado de resultados enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-DEL-1-AL-31-ENE.pdf' }
      ],
      2023: [
        { titulo: 'Estados financieros, dictamen y notas año 2023', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADOS-FINANCIEROS-DICTAMEN-NOTAS-ANO-2023.pdf' },
        { titulo: 'Estado de situación Financiera noviembre', url: 'https://electrohuila.net/wp-content/uploads/2024/01/ESF-noviembre-2023.pdf' },
        { titulo: 'Estado de resultados noviembre', url: 'https://electrohuila.net/wp-content/uploads/2024/01/ER-noviembre-2023.pdf.pdf' },
        { titulo: 'Estado de situación Financiera octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/12/ESF-octubre-2023.pdf' },
        { titulo: 'Estado de resultados octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/12/ER-octubre-2023.pdf' },
        { titulo: 'Estado de situación Financiera septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ESF-septiembre-2023.pdf' },
        { titulo: 'Estado de resultados septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ER-septiembre-2023.pdf' },
        { titulo: 'Estado de situación Financiera agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ESF-agosto-2023.pdf' },
        { titulo: 'Estado de resultados agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ER-agosto-2023.pdf' },
        { titulo: 'Estado de situación Financiera julio', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ESF-julio-2023.pdf' },
        { titulo: 'Estado de resultados julio', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ER-julio-2023.pdf' },
        { titulo: 'Estado de situación Financiera junio', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ESF-junio-2023.pdf' },
        { titulo: 'Estado de resultados junio', url: 'https://electrohuila.net/wp-content/uploads/2023/11/ER-junio-2023.pdf' },
        { titulo: 'Estado de situación Financiera mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-MAYO.pdf' },
        { titulo: 'Estado de resultados mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-MAYO.pdf' },
        { titulo: 'Estado de situación Financiera abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-ABRIL-1.pdf' },
        { titulo: 'Estado de resultados abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-ABRIL-1.pdf' },
        { titulo: 'Estado de situación Financiera marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-MARZO-2023.pdf' },
        { titulo: 'Estado de resultados marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-MARZO-2023.pdf' },
        { titulo: 'Estado de situación Financiera febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-FEBRERO-2023.pdf' },
        { titulo: 'Estado de resultados febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-FEBRERO-2023.pdf' },
        { titulo: 'Estado de situación Financiera enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-ENERO-2023.pdf' },
        { titulo: 'Estado de resultados enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-ENERO-2023.pdf' }
      ],
      2022: [
        { titulo: 'Estado de situación Financiera y de Resultados diciembre', url: 'https://electrohuila.net/wp-content/uploads/2023/11/esf-er-diciembre-2022.pdf' },
        { titulo: 'Estado de situación Financiera noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-NOV-2022.pdf' },
        { titulo: 'Estado de resultados noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-NOV-2022.pdf' },
        { titulo: 'Estado de situación Financiera octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-OCTUBRE-2022-1.pdf' },
        { titulo: 'Estado de resultados octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-OCTUBRE-2022.pdf' },
        { titulo: 'Estado de situación Financiera septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-SEPTIEMBRE-2022.pdf' },
        { titulo: 'Estado de resultados septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-SEPTIMBRE-2022.pdf' },
        { titulo: 'Estado de situación Financiera agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-AGO-2022.pdf' },
        { titulo: 'Estado de resultados agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-AGO-2022.pdf' },
        { titulo: 'Estado de situación Financiera julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-JULIO-2022.pdf' },
        { titulo: 'Estado de resultados julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-JULIO-2022.pdf' },
        { titulo: 'Estado de situación Financiera junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-JUNIO-2022.pdf' },
        { titulo: 'Estado de resultados junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-JUNIO-2022.pdf' },
        { titulo: 'Estado de situación Financiera mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-MAYO-2022.pdf' },
        { titulo: 'Estado de resultados mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-MAYO-2022-1.pdf' },
        { titulo: 'Estado de situación Financiera abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-ABRIL-2022.pdf' },
        { titulo: 'Estado de resultados abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-ABRIL-2022.pdf' },
        { titulo: 'Estado de situación Financiera marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-MARZO-2022.pdf' },
        { titulo: 'Estado de resultados marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-MARZO-2022.pdf' },
        { titulo: 'Estado de situación Financiera febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-FEBRERO-2022-1.pdf' },
        { titulo: 'Estado de resultados febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-FEBRERO-2022.pdf' },
        { titulo: 'Estado de situación Financiera enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-ENERO-2022.pdf' },
        { titulo: 'Estado de resultados enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ERI-ENERO-2022.pdf' }
      ],
      2021: [
        { titulo: 'Estado de situación Financiera diciembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estados-Financieros-y-Notas-2021.pdf' },
        { titulo: 'Estado de resultados diciembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estados-Financieros-y-Notas-2021-1.pdf' },
        { titulo: 'Estado de situación Financiera noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-NOV-2021.pdf' },
        { titulo: 'Estado de resultados noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-NOV-2021.pdf' },
        { titulo: 'Estado de situación Financiera octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-OCTUBRE-2021.pdf' },
        { titulo: 'Estado de resultados octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-OCTUBRE-2021.pdf' },
        { titulo: 'Estado de situación Financiera septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-sep-2021.pdf' },
        { titulo: 'Estado de resultados septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-sep-2021.pdf' },
        { titulo: 'Estado de situación Financiera agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-agosto-2021.pdf' },
        { titulo: 'Estado de resultados agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-agosto-2021.pdf' },
        { titulo: 'Estado de situación Financiera julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-julio-2021.pdf' },
        { titulo: 'Estado de resultados julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-julio-2021.pdf' },
        { titulo: 'Estado de situación Financiera junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-junio-2021.pdf' },
        { titulo: 'Estado de resultados junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-junio-2021.pdf' },
        { titulo: 'Estado de situación Financiera mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-mayo-2021.pdf' },
        { titulo: 'Estado de resultados mayo', url: null },
        { titulo: 'Estado de situación Financiera abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-abril.pdf' },
        { titulo: 'Estado de resultados abril', url: null },
        { titulo: 'Estado de situación Financiera marzo', url: null },
        { titulo: 'Estado de resultados marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-marzo-2021.pdf' },
        { titulo: 'Estado de situación Financiera febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/estadosfinacieroFEBRERO.pdf' },
        { titulo: 'Estado de resultados febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/esatdoresultadoFEBRERO.pdf' },
        { titulo: 'Estado de situación Financiera enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/estadosfinacierosENERO.pdf' },
        { titulo: 'Estado de resultados enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/esatdoresultadoENERO.pdf' }
      ],
      2020: [
        { titulo: 'Estado de situación Financiera diciembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/estadofiancieroDIC-2020.pdf' },
        { titulo: 'Estado de resultados diciembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estados-Financieros-a-2020.pdf' },
        { titulo: 'Estado de situación Financiera noviembre', url: null },
        { titulo: 'Estado de resultados noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-nov-2020.pdf' },
        { titulo: 'Estado de situación Financiera octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-oct-2020.pdf' },
        { titulo: 'Estado de resultados octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-oct-2020.pdf' },
        { titulo: 'Estado de situación Financiera septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-sept-2020.pdf' },
        { titulo: 'Estado de resultados septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-sept-2020.pdf' },
        { titulo: 'Estado de situación Financiera agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-agosto-2020.pdf' },
        { titulo: 'Estado de resultados agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-agosto-2020.pdf' },
        { titulo: 'Estado de situación Financiera julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-julio-2020.pdf' },
        { titulo: 'Estado de resultados julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-julio-2020.pdf' },
        { titulo: 'Estado de situación Financiera junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-JUNIO-2020.pdf' },
        { titulo: 'Estado de resultados junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-JUNIO-2020.pdf' },
        { titulo: 'Estado de situación Financiera mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-MAYO-2020.pdf' },
        { titulo: 'Estado de resultados mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-MAYO-2020.pdf' },
        { titulo: 'Estado de situación Financiera abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-abril-2020.pdf' },
        { titulo: 'Estado de resultados abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-abril-2020.pdf' },
        { titulo: 'Estado de situación Financiera marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-marzo-2020.pdf' },
        { titulo: 'Estado de resultados marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-marzo-2020.pdf' },
        { titulo: 'Estado de situación Financiera febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-febrero-2020.pdf' },
        { titulo: 'Estado de resultados febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-febrero-2020.pdf' },
        { titulo: 'Estado de situación Financiera enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-enero-2020.pdf' },
        { titulo: 'Estado de resultados enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ER-enero-2020.pdf' }
      ],
      2019: [
        { titulo: 'Estado de situación Financiera diciembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESTADOS-FINANCIEROS-a-dic-2019-2018.pdf' },
        { titulo: 'Estado de situación Financiera noviembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-noviembre2019.pdf' },
        { titulo: 'Estado de situación Financiera octubre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-octubre-19.pdf' },
        { titulo: 'Estado de situación Financiera septiembre', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-septiembre_2019.pdf' },
        { titulo: 'Estado de situación Financiera agosto', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF_AGOSTO-2019.pdf' },
        { titulo: 'Estado de situación Financiera julio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-JUL-2019.pdf' },
        { titulo: 'Estado de situación Financiera junio', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estado-Situacion-Financiera-junio-19.pdf' },
        { titulo: 'Estado de situación Financiera mayo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estado-Situacion-Financiera-mayo-19.pdf' },
        { titulo: 'Estado de situación Financiera abril', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estado-Situacion-Financiera-abr-2019.pdf' },
        { titulo: 'Estado de situación Financiera marzo', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estado-Situacion-Financiera-marzo2019.pdf' },
        { titulo: 'Estado de situación Financiera febrero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-febrero-2019.pdf' },
        { titulo: 'Estado de situación Financiera enero', url: 'https://electrohuila.net/wp-content/uploads/2023/07/ESF-enero-2019.pdf' }
      ],
      2018: [
        { titulo: 'Estado de situación Financiera 2018 – 2017', url: 'https://electrohuila.net/wp-content/uploads/2023/07/Estados-financieros-2018-2017-y-Dictamen-Revisoria-Fiscal.pdf' }
      ]
    },
    control: {
      2024: [
        { titulo: 'Informe de la Evaluación del Control Interno Contable de la vigencia 2024', url: 'https://electrohuila.net/wp-content/uploads/2025/03/Informe-Evaluacion-del-Control-Interno-Contable-ECIC-2024-v.D.pdf' }
      ],
      2023: [
        { titulo: 'Informe de la Evaluación del Control Interno Contable de la vigencia 2023', url: 'https://electrohuila.net/wp-content/uploads/2024/04/Informe-Evaluacion-Control-Interno-Contable-2023.pdf' }
      ],
      2022: [
        { titulo: 'Informe de la Evaluación del Control Interno Contable de la Vigencia 2022', url: 'https://electrohuila.net/wp-content/uploads/2023/07/InformeEvaluacinControlInternoContable.pdf' }
      ]
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setExpandedYear(null);
  };

  const toggleYear = (año) => {
    setExpandedYear(expandedYear === año ? null : año);
  };

  const getAñosParaCategoria = (categoria) => {
    return Object.keys(documentosConLinks[categoria]).map(Number).sort((a, b) => b - a);
  };

  const renderDocumentos = () => {
    const años = getAñosParaCategoria(activeTab);
    const docsCategoria = documentosConLinks[activeTab] || {};

    return (
      <div className="space-y-2">
        {años.map((año) => {
          const documentosDelAño = docsCategoria[año] || [];
          const isExpanded = expandedYear === año;

          return (
            <div key={año} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleYear(año)}
                className="w-full px-4 py-3 text-left bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-between"
              >
                <span className="text-lg font-medium">— {año}</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {isExpanded && (
                <div className="px-4 py-3 bg-gray-50">
                  {documentosDelAño.length > 0 ? (
                    <ul className="space-y-2">
                      {documentosDelAño.map((doc, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 mt-1 flex-shrink-0"></span>
                          {doc.url ? (
                            <a 
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                              {doc.titulo}
                            </a>
                          ) : (
                            <span className="text-gray-500">{doc.titulo}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 italic">No hay documentos disponibles para este año</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Información Financiera</h1>
        <p className="text-gray-600">Documentos financieros de ElectroHuila S.A. E.S.P.</p>
      </div>

      <div className="flex flex-wrap justify-center mb-6">
        <button
          onClick={() => handleTabChange('presupuesto')}
          className={`px-6 py-3 mx-1 mb-2 rounded-t-lg transition-colors ${
            activeTab === 'presupuesto'
              ? 'bg-gray-400 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ✓ Presupuesto
        </button>
        <button
          onClick={() => handleTabChange('estados')}
          className={`px-6 py-3 mx-1 mb-2 rounded-t-lg transition-colors ${
            activeTab === 'estados'
              ? 'bg-gray-400 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ✓ Estados Financieros
        </button>
        <button
          onClick={() => handleTabChange('control')}
          className={`px-6 py-3 mx-1 mb-2 rounded-t-lg transition-colors ${
            activeTab === 'control'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          ✓ Informe Control Interno Contable
        </button>
      </div>

      <div className="mb-8">
        {renderDocumentos()}
      </div>
    </div>
  );
};

export default InformacionFinanciera;