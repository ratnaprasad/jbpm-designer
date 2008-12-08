﻿/**
 * @author Anna Luebbe
 * 
 * Contains all strings for Spanish language.
 * Version 1 - 12/01/08
 */
if(!ORYX) var ORYX = {};

if(!ORYX.I18N) ORYX.I18N = {};

ORYX.I18N.Language = "es_ES"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!ORYX.I18N.Oryx) ORYX.I18N.Oryx = {};

ORYX.I18N.Oryx.pleaseWait = "Oryx está cargando ... Espere por favor."; 

if(!ORYX.I18N.AddDocker) ORYX.I18N.AddDocker = {};

ORYX.I18N.AddDocker.group = "Docker";
ORYX.I18N.AddDocker.add = "Añadir Docker"; 
ORYX.I18N.AddDocker.addDesc = "Añade un Docker haziendo cliq sobre la linea";
ORYX.I18N.AddDocker.del = "Borrar el Docker";  
ORYX.I18N.AddDocker.delDesc = "Borre el Docker haciendo cliq sobre él";

if(!ORYX.I18N.SSExtensionLoader) ORYX.I18N.SSExtensionLoader = {};

ORYX.I18N.SSExtensionLoader.group = "Juego de plantillas";
ORYX.I18N.SSExtensionLoader.add = "Añadir ampliaciones al juego de plantillas";
ORYX.I18N.SSExtensionLoader.addDesc = "Añadir ampliaciones al juego de plantillas";
ORYX.I18N.SSExtensionLoader.loading = "Esta cargando ampliaciones al juego de plantillas"
ORYX.I18N.SSExtensionLoader.noExt = "No hay mas ampliaciones a disposición"
ORYX.I18N.SSExtensionLoader.failed1 = "Ocurrió un error cargando el archivo de configuracion. La respuesta del servidor no contiene un archivo de configuración válido."; 
ORYX.I18N.SSExtensionLoader.failed2 = "Ocurrió un error cargando el archivo de configuracion. El servidor responde un mensaje de error.";
ORYX.I18N.SSExtensionLoader.panelTitle = "Ampliaciónes al juego de plantillas";
ORYX.I18N.SSExtensionLoader.panelText = "Seleccione ampliaciones a añadir";

if(!ORYX.I18N.AdHocCC) ORYX.I18N.AdHocCC = {};

ORYX.I18N.AdHocCC.group = "Ad Hoc";
ORYX.I18N.AdHocCC.compl = "Editar condición final"; 
ORYX.I18N.AdHocCC.complDesc = "Editar condición final de una actividad Ad Hoc"; 
ORYX.I18N.AdHocCC.notOne = "No ha seleccionado justo un elemento."; 
ORYX.I18N.AdHocCC.nodAdHocCC = "El elemento seleccionado no tiene una condición final Ad Hoc" 
ORYX.I18N.AdHocCC.selectTask = "seleccionar actividad"; 
ORYX.I18N.AdHocCC.selectState = "seleccionar estado";
ORYX.I18N.AdHocCC.addExp = "Añadir expresión";
ORYX.I18N.AdHocCC.selectDataField = "Seleccionar campo de datos"; 
( ORYX.I18N.AdHocCC.enterEqual = "Agregar valor de comparación";
ORYX.I18N.AdHocCC.and = "y";
ORYX.I18N.AdHocCC.or = "o"; 
ORYX.I18N.AdHocCC.not = "no";
( ORYX.I18N.AdHocCC.clearCC = "Borrar condición final";
( ORYX.I18N.AdHocCC.editCC = "Editar condición final ad hoc";
ORYX.I18N.AdHocCC.addExecState = "Añadir expresión de estado de ejecución"; 
ORYX.I18N.AdHocCC.addDataExp = "Añadir expresión de datos";
ORYX.I18N.AdHocCC.addLogOp = "Añadir operadores logicos";
ORYX.I18N.AdHocCC.curCond = "Condición final actual";

if(!ORYX.I18N.AMLSupport) ORYX.I18N.AMLSupport = {};

ORYX.I18N.AMLSupport.group = "EPC"; 
ORYX.I18N.AMLSupport.imp = "Importar archivo AML"; 
ORYX.I18N.AMLSupport.impDesc = "Importar archivo Aris 7 AML";
ORYX.I18N.AMLSupport.failed = "Falló importar el archivo AML. Por favor compruebe que el archivo seleccionado es un archivo AML válido. Mensaje de error: ";
ORYX.I18N.AMLSupport.failed2 = "Falló importar el archivo AML: ";
ORYX.I18N.AMLSupport.noRights = "No tiene derecho suficente para el importe de varios diagramas. (Requerido iniciar sesión).";
ORYX.I18N.AMLSupport.panelText = "Seleccione un archivo AML (.xml) que quiere importar";
ORYX.I18N.AMLSupport.file = "Archivo"; 
ORYX.I18N.AMLSupport.importBtn = "Importar archivo AML";
ORYX.I18N.AMLSupport.get = "Está cargando diagramas..."; 
ORYX.I18N.AMLSupport.close = "Cerrar";
ORYX.I18N.AMLSupport.title = "Título"; 
ORYX.I18N.AMLSupport.selectDiagrams = "Seleccione diagramas que quiere importar. <br/> Un diagrama seleccionado está importado al editor abierto. Si selecciona mas que un diagrama, ellos seran guardados directamente.";
ORYX.I18N.AMLSupport.impText = "Importar";
ORYX.I18N.AMLSupport.impProgress = "Realizando importe...";
ORYX.I18N.AMLSupport.cancel = "Cancelar"; 
ORYX.I18N.AMLSupport.name = "Nombre"; 
ORYX.I18N.AMLSupport.allImported = "Todos diagramas importados";
ORYX.I18N.AMLSupport.ok = "Ok"; 

if(!ORYX.I18N.Arrangement) ORYX.I18N.Arrangement = {};

ORYX.I18N.Arrangement.groupZ = "Z-Order";
ORYX.I18N.Arrangement.btf = "En primer plano"; 
ORYX.I18N.Arrangement.btfDesc = "En primer plano";
ORYX.I18N.Arrangement.btb = "Al fondo";  
ORYX.I18N.Arrangement.btbDesc = "Al fondo";
ORYX.I18N.Arrangement.bf = "Un nivél mas adelante"; 
ORYX.I18N.Arrangement.bfDesc = "Un nivél mas adelante";
ORYX.I18N.Arrangement.bb = "Un nivél atras"; 
ORYX.I18N.Arrangement.bbDesc = "Un nivél atras";
ORYX.I18N.Arrangement.groupA = "Alineado";
ORYX.I18N.Arrangement.ab = "Alinear abajo"; 
ORYX.I18N.Arrangement.abDesc = "Alinear abajo";
ORYX.I18N.Arrangement.am = "Alinear centrado en el eje horizontal"; 
ORYX.I18N.Arrangement.amDesc = "Alinear centrado en el eje horizontal";
ORYX.I18N.Arrangement.at = "Alinear arriba"; 
ORYX.I18N.Arrangement.atDesc = "Alinear arriba";
ORYX.I18N.Arrangement.al = "Alinear a la izqierda";
ORYX.I18N.Arrangement.alDesc = "Alinear a la izqierda";
ORYX.I18N.Arrangement.ac = "Alinear centrado en el eje vertical"; 
ORYX.I18N.Arrangement.acDesc = "Alinear centrado en el eje vertical";
ORYX.I18N.Arrangement.ar = "Alinear a la derecha"; 
ORYX.I18N.Arrangement.arDesc = "Alinear a la derecha";

if(!ORYX.I18N.BPELSupport) ORYX.I18N.BPELSupport = {};

ORYX.I18N.BPELSupport.group = "BPEL";
ORYX.I18N.BPELSupport.exp = "Exportación BPEL";
ORYX.I18N.BPELSupport.expDesc = "Exportar a BPEL";
ORYX.I18N.BPELSupport.imp = "Importar BPEL";
ORYX.I18N.BPELSupport.impDesc = "Importar un archivor BPEL";
ORYX.I18N.BPELSupport.selectFile = "Seleccione un archivo BPEL que quiere importar";
ORYX.I18N.BPELSupport.file = "Archivo"; 
ORYX.I18N.BPELSupport.impPanel = "Importar archivo BPEL";
ORYX.I18N.BPELSupport.impBtn = "Importar";
ORYX.I18N.BPELSupport.content = "Contenido"; 
ORYX.I18N.BPELSupport.close = "Cerrar"; 
ORYX.I18N.BPELSupport.error = "Error"; 
ORYX.I18N.BPELSupport.progressImp = "Importa... ";
ORYX.I18N.BPELSupport.progressExp = "Exporta..."; 
ORYX.I18N.BPELSupport.impFailed = "Se produjo un error al importar. <br/>mensaje de error: <br/><br/>"; 

if(!ORYX.I18N.Bpel4ChorTransformation) ORYX.I18N.Bpel4ChorTransformation = {};

ORYX.I18N.Bpel4ChorTransformation.group = "BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportBPEL = "BPEL4Chor exportación";
ORYX.I18N.Bpel4ChorTransformation.exportBPELDesc = "Exportar a BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportXPDL = "XPDL4Chor exportación";
ORYX.I18N.Bpel4ChorTransformation.exportXPDLDesc = "Exportar a XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.warning = "Alerta";
ORYX.I18N.Bpel4ChorTransformation.wrongValue = 'El nombre modificado tiene que tener el calor "1" para evitar errores al transformar a BPEL4Chor.'; 
ORYX.I18N.Bpel4ChorTransformation.loopNone = 'La Tarea recipiente para estar transformado a BPEL4Chor tiene que tener el tipo de circulo "none"';
ORYX.I18N.Bpel4ChorTransformation.error = "Error"; 
ORYX.I18N.Bpel4ChorTransformation.noSource = "1 con la ID 2 no tiene objeto de fuente";  
ORYX.I18N.Bpel4ChorTransformation.noTarget = "1 con la ID 2 no tiene objeto de destinación ";
ORYX.I18N.Bpel4ChorTransformation.transCall = "Se produjo un error al transformar. 1:2"; 
ORYX.I18N.Bpel4ChorTransformation.noResult = "El servicio web de transformación no ha suministrado un resultado.";  
ORYX.I18N.Bpel4ChorTransformation.errorParsing = "Al analizar el diagrama se produjo un error."; 
ORYX.I18N.Bpel4ChorTransformation.transResult = "Resultados de transformación"; 
ORYX.I18N.Bpel4ChorTransformation.showFile = "Mostrar archivo de resultado"; 
ORYX.I18N.Bpel4ChorTransformation.downloadFile = "Descargar archivo de resultado"; 
ORYX.I18N.Bpel4ChorTransformation.downloadAll = "Descargar todos los archivos de resultado"; 
ORYX.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "Exporta a XPDL4Chor";  
ORYX.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "Exporta a BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.noGen = "No se ha podido crear datos de input para la transformación: 1\n2\n"

if(!ORYX.I18N.DesynchronizabilityOverlay) ORYX.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
ORYX.I18N.DesynchronizabilityOverlay.group = "Overlay";
ORYX.I18N.DesynchronizabilityOverlay.name = "Desynchronizability Checker";
ORYX.I18N.DesynchronizabilityOverlay.desc = "Desynchronizability Checker";
ORYX.I18N.DesynchronizabilityOverlay.sync = "The net is desynchronizable.";
ORYX.I18N.DesynchronizabilityOverlay.error = "The net has 1 syntax errors.";
ORYX.I18N.DesynchronizabilityOverlay.invalid = "Invalid answer from server.";

if(!ORYX.I18N.Edit) ORYX.I18N.Edit = {};

ORYX.I18N.Edit.group = "Editar"; 
ORYX.I18N.Edit.cut = "Cortar"; 
ORYX.I18N.Edit.cutDesc = "Cortar los elementos seleccionados";  
ORYX.I18N.Edit.copy = "Copiar"; 
ORYX.I18N.Edit.copyDesc = "Copiar los elementos seleccionados";  
ORYX.I18N.Edit.paste = "Pegar"; 
ORYX.I18N.Edit.pasteDesc = "Pegar los elementos copiados/seleccionados";  
ORYX.I18N.Edit.del = "Borrar";  
ORYX.I18N.Edit.delDesc = "Borrar los elementos seleccionados"; 

if(!ORYX.I18N.EPCSupport) ORYX.I18N.EPCSupport = {};

ORYX.I18N.EPCSupport.group = "EPC";
ORYX.I18N.EPCSupport.exp = "Exportación EPML";
ORYX.I18N.EPCSupport.expDesc = "Exportar a EPML";
ORYX.I18N.EPCSupport.imp = "Importación EPML";
ORYX.I18N.EPCSupport.impDesc = "Importar un archivo EPML";
ORYX.I18N.EPCSupport.progressExp = "Exporta modelo";  
ORYX.I18N.EPCSupport.selectFile = "Seleccione un archivo EPML que quiere importar.";
ORYX.I18N.EPCSupport.file = "Archivo";
ORYX.I18N.EPCSupport.impPanel = "Importar archivo EPML";
ORYX.I18N.EPCSupport.impBtn = "Importar";
ORYX.I18N.EPCSupport.close = "Cerrar";
ORYX.I18N.EPCSupport.error = "Error";
ORYX.I18N.EPCSupport.progressImp = "Está importando...";

if(!ORYX.I18N.ERDFSupport) ORYX.I18N.ERDFSupport = {};

ORYX.I18N.ERDFSupport.group = "ERDF";
ORYX.I18N.ERDFSupport.exp = "Exportación ERDF";
ORYX.I18N.ERDFSupport.expDesc = "Exportar a ERDF";
ORYX.I18N.ERDFSupport.imp = "Importación ERDF";
ORYX.I18N.ERDFSupport.impDesc = "Importar archivo ERDF";
ORYX.I18N.ERDFSupport.impFailed = "Falló la pregunta por la importación del archivo ERDF.";
ORYX.I18N.ERDFSupport.impFailed2 = "Al importar se produjo un error. <br/>mensaje de error: <br/><br/>";
ORYX.I18N.ERDFSupport.error = "Error";
ORYX.I18N.ERDFSupport.noCanvas = "El documento XML no contiene un nudo Oryx Canvas.";
ORYX.I18N.ERDFSupport.noSS = "El documento XML no tiene referencia al juego de plantillas.";
ORYX.I18N.ERDFSupport.wrongSS = "El juego de plantillas referenciado no Das im XML Dokument referenzierte Stencil Set passt nicht zu dem im Editor geladenen Stencil Set.";
ORYX.I18N.ERDFSupport.selectFile = "Seleccione un archivo ERDF (.xml) o ingrese el codigo ERDF en el campo de texto.";
ORYX.I18N.ERDFSupport.file = "Archivo";
ORYX.I18N.ERDFSupport.impERDF = "Importar ERDF";
ORYX.I18N.ERDFSupport.impBtn = "Importar";
ORYX.I18N.ERDFSupport.impProgress = "Esta importando...";
ORYX.I18N.ERDFSupport.close = "Cerrar";

if(!ORYX.I18N.Save) ORYX.I18N.Save = {};

ORYX.I18N.Save.group = "Archivo";
ORYX.I18N.Save.save = "Guardar";
ORYX.I18N.Save.saveDesc = "Guardar";
ORYX.I18N.Save.saveAs = "Guardar como...";
ORYX.I18N.Save.saveAsDesc = "Guardar como...";
ORYX.I18N.Save.unsavedData = "El diagrama contiene datos no guardados. ¿Esta seguro que quiere cerrar el editor?";
ORYX.I18N.Save.newProcess = "Proceso nuevo";
ORYX.I18N.Save.saveAsTitle = "Guardar como...";
ORYX.I18N.Save.saveBtn = "Guardar";
ORYX.I18N.Save.close = "Cerrar";
ORYX.I18N.Save.savedAs = "Guardado como";
ORYX.I18N.Save.saved = "Guardado";
ORYX.I18N.Save.failed = "Falló guardar.";
ORYX.I18N.Save.noRights = "No tiene derecho suficiente para guardar modificaciones.";
ORYX.I18N.Save.saving = "Guardar";

if(!ORYX.I18N.File) ORYX.I18N.File = {};

ORYX.I18N.File.group = "Archivo";
ORYX.I18N.File.print = "Imprimir";
ORYX.I18N.File.printDesc = "Imprimir";
ORYX.I18N.File.pdf = "Exportación de PDF";
ORYX.I18N.File.pdfDesc = "Exportación a PDF";
ORYX.I18N.File.info = "sobre";
ORYX.I18N.File.infoDesc = "sobre";
ORYX.I18N.File.genPDF = "Está creando PDF...";
ORYX.I18N.File.genPDFFailed = "Falló la creación del archivo PDF.";
ORYX.I18N.File.printTitle = "Imprimir";
ORYX.I18N.File.printMsg = "Sentimos que por el momento la función "imprimir" no trabaja siempre correcto. Por favor, utilice la exportación al PDF y imprime el documento PDF. ¿Quiere seguir imprimiendo?";

if(!ORYX.I18N.Grouping) ORYX.I18N.Grouping = {};

ORYX.I18N.Grouping.grouping = "Agrupar";
ORYX.I18N.Grouping.group = "Agrupar";
ORYX.I18N.Grouping.groupDesc = "Agrupar elementos seleccionados";
ORYX.I18N.Grouping.ungroup = "Borrar agrupación";
ORYX.I18N.Grouping.ungroupDesc = "Borrar todas las agrupaciones de los elementos seleccionados"; 

if(!ORYX.I18N.IBPMN2BPMN) ORYX.I18N.IBPMN2BPMN = {};

ORYX.I18N.IBPMN2BPMN.group ="Exportación";
ORYX.I18N.IBPMN2BPMN.name ="IBPMN 2 BPMN Mapping";
ORYX.I18N.IBPMN2BPMN.desc ="convertir IBPMN a BPMN";

if(!ORYX.I18N.Loading) ORYX.I18N.Loading = {};

ORYX.I18N.Loading.waiting ="Espere por favor...";

if(!ORYX.I18N.Pnmlexport) ORYX.I18N.Pnmlexport = {};

ORYX.I18N.Pnmlexport.group ="Exportación";
ORYX.I18N.Pnmlexport.name ="Exportación PNML";
ORYX.I18N.Pnmlexport.desc ="Exportar a PNML ejecutable y deploy";

if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};

ORYX.I18N.PropertyWindow.name = "Nombre";
ORYX.I18N.PropertyWindow.value = "Valor";
ORYX.I18N.PropertyWindow.clickIcon = "Hacer cliq en el símbolo";
ORYX.I18N.PropertyWindow.add = "Añadir";
ORYX.I18N.PropertyWindow.rem = "Borrar";
ORYX.I18N.PropertyWindow.complex = "Editor para propriedad compleja";
ORYX.I18N.PropertyWindow.ok = "Ok";
ORYX.I18N.PropertyWindow.cancel = "Cancelar";
ORYX.I18N.PropertyWindow.dateFormat = "dia/mes/año";

if(!ORYX.I18N.ShapeMenuPlugin) ORYX.I18N.ShapeMenuPlugin = {};

ORYX.I18N.ShapeMenuPlugin.drag = "Tirar";
ORYX.I18N.ShapeMenuPlugin.clickDrag = "Hacer cliq o tirar";

if(!ORYX.I18N.SimplePnmlexport) ORYX.I18N.SimplePnmlexport = {};

ORYX.I18N.SimplePnmlexport.group = "Exportación";
ORYX.I18N.SimplePnmlexport.name = "Exportación PNML simple";
ORYX.I18N.SimplePnmlexport.desc = "Exportar a PNML";

if(!ORYX.I18N.StepThroughPlugin) ORYX.I18N.StepThroughPlugin = {};

ORYX.I18N.StepThroughPlugin.group = "Step Through";
ORYX.I18N.StepThroughPlugin.stepThrough = "Ejecución paso a paso";
ORYX.I18N.StepThroughPlugin.stepThroughDesc = "Ejecución paso a paso del modelo BPMN";
ORYX.I18N.StepThroughPlugin.undo = "Anular";
ORYX.I18N.StepThroughPlugin.undoDesc = "Anular";
ORYX.I18N.StepThroughPlugin.error = "La ejecución del modelo no está posible.";

if(!ORYX.I18N.SyntaxChecker) ORYX.I18N.SyntaxChecker = {};

ORYX.I18N.SyntaxChecker.group = "Verificación";
ORYX.I18N.SyntaxChecker.name = "Compruebe síntaxis";
ORYX.I18N.SyntaxChecker.desc = "Comprobando síntaxis";
ORYX.I18N.SyntaxChecker.noErrors = "No se ha encontrado errores de síntaxis.";
ORYX.I18N.SyntaxChecker.invalid = "Respuesta invalida del servidor.";

if(!ORYX.I18N.Undo) ORYX.I18N.Undo = {};

ORYX.I18N.Undo.group = "Anular";
ORYX.I18N.Undo.undo = "Anular";
ORYX.I18N.Undo.undoDesc = "Anular";
ORYX.I18N.Undo.redo = "Restablecer";
ORYX.I18N.Undo.redoDesc = "Restablecer";

if(!ORYX.I18N.View) ORYX.I18N.View = {};

ORYX.I18N.View.group = "Zoom";
ORYX.I18N.View.zoomIn = "Engrandecer";
ORYX.I18N.View.zoomInDesc = "Engrandecer";
ORYX.I18N.View.zoomOut = "Reducir";
ORYX.I18N.View.zoomOutDesc = "Reducir";


if(!ORYX.I18N.XFormsSerialization) ORYX.I18N.XFormsSerialization = {};

ORYX.I18N.XFormsSerialization.group = "XForms Serialization";
ORYX.I18N.XFormsSerialization.exportXForms = "XForms Export";
ORYX.I18N.XFormsSerialization.exportXFormsDesc = "Export XForms+XHTML markup";
ORYX.I18N.XFormsSerialization.importXForms = "XForms Import";
ORYX.I18N.XFormsSerialization.importXFormsDesc = "Import XForms+XHTML markup";
ORYX.I18N.XFormsSerialization.noClientXFormsSupport = "No XForms support";
ORYX.I18N.XFormsSerialization.noClientXFormsSupportDesc = "<h2>Your browser does not support XForms. Please install the <a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> for Firefox.</h2>";
ORYX.I18N.XFormsSerialization.ok = "Ok";
ORYX.I18N.XFormsSerialization.selectFile = "Select a XHTML (.xhtml) file or type in the XForms+XHTML markup to import it!";
ORYX.I18N.XFormsSerialization.file = "File";
ORYX.I18N.XFormsSerialization.impFailed = "Request for import of document failed.";
ORYX.I18N.XFormsSerialization.impTitl = "Import XForms+XHTML document";
ORYX.I18N.XFormsSerialization.impButton = "Import";
ORYX.I18N.XFormsSerialization.impProgress = "Importing...";
ORYX.I18N.XFormsSerialization.close = "Close";


if(!ORYX.I18N.TreeGraphSupport) ORYX.I18N.TreeGraphSupport = {};

ORYX.I18N.TreeGraphSupport.syntaxCheckName = "Syntax Check";
ORYX.I18N.TreeGraphSupport.group = "Tree Graph Support";
ORYX.I18N.TreeGraphSupport.syntaxCheckDesc = "Check the syntax of an tree graph structure";