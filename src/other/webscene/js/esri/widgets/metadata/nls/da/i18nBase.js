define(
   ({
  	
    general: {
      cancel: "Annullér",
      close: "Luk",
    	none: "ø_None__å",
    	ok: "ø_OK__å",
    	other: "ø_Other___å",
    	stamp: "ø_Stamp___å"
    },
    
    editor: {
      noMetadata: "Der er ingen metadata for dette element.",
    	xmlViewOnly: "ø_This type of metadata can only be viewed as an XML________________å.",
    	editorDialog: {
    		caption: "ø_Metadata___å",
    		captionPattern: "ø_Metadata for {title}_______å"
    	},
    	primaryToolbar: {
    		view: "ø_View__å",
    		viewXml: "ø_View XML___å",
    		edit: "ø_Edit__å",
    		initializing: "ø_Loading____å...",
    		startingEditor: "ø_Starting editor______å...",
    		loadingDocument: "ø_Loading document_______å...",
    		updatingDocument: "ø_Updating document_______å...",
    		generatingView: "ø_Generating view______å...",
    		errors: {
    			errorGeneratingView: "ø_An error occurred while generating the view______________å.",
    			errorLoadingDocument: "ø_An error occurred while loading the document_______________å."
    		}
    	},
    	changesNotSaved: {
    		prompt: "ø_Your document has changes that have not been saved________________å.",
    		dialogTitle: "ø_Close Metadata Editor_______å",
    		closeButton: "ø_Discard & Close______å"
    	},
    	download: {
    		caption: "ø_Download___å",
    		dialogTitle: "ø_Download___å",
    		prompt: "ø_Click here to download your file___________å."
    	},
    	load: {
    		caption: "ø_Load__å",
    		dialogTitle: "ø_Load Metadata_____å",
    		typeTab: "ø_A Type___å",
    		fileTab: "ø_A File___å",
    		templateTab: "ø_A Template____å",
    		itemTab: "ø_Your Item____å",
    		filePrompt: "ø_Select a local XML file________å:",
    		templatePrompt: "ø_Select a local XML file (key properties will be updated)__________________å:",
    		pullItem: "ø_Update metadata with key properties of your item________________å.",
    		importWarning: "ø_The selected file did not match a supported format________________å.",
    		loading: "ø_Loading____å...",
    		noMetadata: "ø_Metadata can be created for this item by choosing one of the following options_________________________å.",
    		unrecognizedMetadata: "ø_The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options_______________________________________________å.",
    		errorLoading: "ø_There was an error while loading___________å.",
    		warnings: {
    			badFile: "ø_The selected file could not be loaded____________å.",
    			notAnXml: "ø_The selected file is not an XML file____________å.",
    			notSupported: "ø_This type of file is not supported____________å."
    		}
    	},
    	save: {
    		caption: "ø_Save__å",
    		dialogTitle: "ø_Save Metadata_____å",
    		working: "ø_Saving metadata______å...",
    		errorSaving: "ø_An error occurred, your metadata was not saved_______________å.",
    		saveDialog: {
    			pushCaption: "ø_Apply changes to your item_________å"
    		}
    	},
    	saveAndClose: {
    		caption: "ø_Save & Close_____å"
    	},
    	saveDraft: {
    		caption: "ø_Draft___å",
    		dialogTitle: "ø_Save a Local Draft______å"
    	},
    	del: {
    		caption: "ø_Delete___å",
    		dialogTitle: "ø_Delete Metadata______å",
    		prompt: "ø_Are you sure you want to delete this metadata_______________å?",
    		working: "ø_Deleting metadata_______å...",
    		errorDeleting: "ø_An error occurred, your metadata was not deleted________________å."
    	},
    	transform: {
    		caption: "ø_Transform____å",
    		dialogTitle: "ø_Transform To_____å",
    		prompt: "",
    		working: "ø_Transforming______å...",
    		errorTransforming: "ø_An error occurred while transforming your document________________å."
    	},
    	errorDialog: {
    		dialogTitle: "ø_There was an error______å"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "ø_Metadata___å"
      	}
      }
    },
    
  	calendar: {
  		button: "ø_Calendar____å...",
  		title: "ø_Calendar___å"
  	},
    
  	geoExtent: {
  		button: "ø_Set Geographic Extent________å...",
  		title: "ø_Geographic Extent______å",
  		navigate: "ø_Navigate___å",
  		draw: "ø_Draw a Rectangle______å",
  		drawHint: "ø_Press down to start and let go to finish_____________å."
  	},
  	
    hints: {
    	date: "ø_(yyyy or yyyy-mm or yyyy-mm-dd)__________å",
    	dateTime: "ø_(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)___________å",
    	dateOrDateTime: "ø_(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)_____________________å",
    	delimitedTextArea: "ø_(use comma or newline to separate)___________å",
    	fgdcDate: "ø_(yyyy or yyyy-mm or yyyy-mm-dd)__________å",
    	fgdcTime: "ø_(hh:mm:ss.sss[+-]hh:mm)________å",
    	integer: "ø_(enter an integer)______å",
    	latitude: "ø_(decimal degrees)______å",
    	longitude: "ø_(decimal degrees)______å",
    	number: "ø_(enter a number)______å",
    	numberGreaterThanZero: "ø_(enter a number > 0)_______å"
    },
    
    isoTopicCategoryCode: {
    	caption: "ø_Topic Category_____å",
    	boundaries: "ø_Administrative and Political Boundaries_____________å",
    	farming: "ø_Agriculture and Farming________å",
    	climatologyMeteorologyAtmosphere: "ø_Atmosphere and Climatic________å",
    	biota: "ø_Biology and Ecology_______å",
    	economy: "ø_Business and Economic_______å",
    	planningCadastre: "ø_Cadastral____å",
    	society: "ø_Cultural, Society and Demography___________å",
    	elevation: "ø_Elevation and Derived Products__________å",
    	environment: "ø_Environment and Conservation_________å",
    	structure: "ø_Facilities and Structures_________å",
    	geoscientificInformation: "ø_Geological and Geophysical_________å",
    	health: "ø_Human Health and Disease________å",
    	imageryBaseMapsEarthCover: "ø_Imagery and Base Maps_______å",
    	inlandWaters: "ø_Inland Water Resources________å",
    	location: "ø_Locations and Geodetic Networks__________å",
    	intelligenceMilitary: "ø_Military___å",
    	oceans: "ø_Oceans and Estuaries_______å",
    	transportation: "ø_Transportation Networks________å",
    	utilitiesCommunication: "ø_Utilities and Communication_________å"
    },
    
    multiplicity: {
    	moveElementDown: "ø_Move Section Down______å",
    	moveElementUp: "ø_Move Section Up______å",
    	removeElement: "ø_Remove Section_____å",
    	repeatElement: "ø_Repeat Section_____å"
    },
    
    serviceTypes: {
  		featureService: "ø_Feature Service______å",
  		mapService: "ø_Map Service____å",
  		imageService: "ø_Image Service_____å",
  		wms: "ø_WMS__å",
  		wfs: "ø_WFS__å",
  		wcs: "ø_WCS__å"
    },
    
    validation: {
    	pattern: "ø_{label} - {message}_______å",
    	patternWithHint: "ø_{label} - {message} {hint}_________å",
	    ok: "ø_OK__å",
	    empty: "ø_A value is required_______å.",
	    date: "ø_The value must be a date_________å.",
	    integer: "ø_The value must be an integer__________å.",
	    number: "ø_The value must be an number_________å.",
	    other: "ø_Invalid value_____å."
    },
    
    validationPane: {
    	clearMessages: "ø_Clear Messages_____å"
    }
    
  })
);
