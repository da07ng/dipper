define({
  root: ({
  	
    general: {
      cancel: "Cancel",
      close: "Close",
    	none: "None",
    	ok: "OK",
    	other: "Other",
    	stamp: "Stamp"
    },
    
    editor: {
      noMetadata: "There is no metadata for this item.",
    	xmlViewOnly: "This type of metadata can only be viewed as an XML.",
    	editorDialog: {
    		caption: "Metadata",
    		captionPattern: "Metadata for {title}"
    	},
    	primaryToolbar: {
    		view: "View",
    		viewXml: "View XML",
    		edit: "Edit",
    		initializing: "Loading...",
    		startingEditor: "Starting editor...",
    		loadingDocument: "Loading document...",
    		updatingDocument: "Updating document...",
    		generatingView: "Generating view...",
    		errors: {
    			errorGeneratingView: "An error occurred while generating the view.",
    			errorLoadingDocument: "An error occurred while loading the document."
    		}
    	},
    	changesNotSaved: {
    		prompt: "Your document has changes that have not been saved.",
    		dialogTitle: "Close Metadata Editor",
    		closeButton: "Discard & Close"
    	},
    	download: {
    		caption: "Download",
    		dialogTitle: "Download",
    		prompt: "Click here to download your file."
    	},
    	load: {
    		caption: "Load",
    		dialogTitle: "Load Metadata",
    		typeTab: "A Type",
    		fileTab: "A File",
    		templateTab: "A Template",
    		itemTab: "Your Item",
    		filePrompt: "Select a local XML file:",
    		templatePrompt: "Select a local XML file (key properties will be updated):",
    		pullItem: "Update metadata with key properties of your item.",
    		importWarning: "The selected file did not match a supported format.",
    		loading: "Loading...",
    		noMetadata: "Metadata can be created for this item by choosing one of the following options.",
    		unrecognizedMetadata: "The type of metadata associated with this item is not supported by the editor. Supported metadata can be created by choosing one of the following options.",
    		errorLoading: "There was an error while loading.",
    		warnings: {
    			badFile: "The selected file could not be loaded.",
    			notAnXml: "The selected file is not an XML file.",
    			notSupported: "This type of file is not supported."
    		}
    	},
    	save: {
    		caption: "Save",
    		dialogTitle: "Save Metadata",
    		working: "Saving metadata...",
    		errorSaving: "An error occurred, your metadata was not saved.",
    		saveDialog: {
    			pushCaption: "Apply changes to your item"
    		}
    	},
    	saveAndClose: {
    		caption: "Save & Close"
    	},
    	saveDraft: {
    		caption: "Draft",
    		dialogTitle: "Save a Local Draft"
    	},
    	del: {
    		caption: "Delete",
    		dialogTitle: "Delete Metadata",
    		prompt: "Are you sure you want to delete this metadata?",
    		working: "Deleting metadata...",
    		errorDeleting: "An error occurred, your metadata was not deleted."
    	},
    	transform: {
    		caption: "Transform",
    		dialogTitle: "Transform To",
    		prompt: "",
    		working: "Transforming...",
    		errorTransforming: "An error occurred while transforming your document."
    	},
    	errorDialog: {
    		dialogTitle: "There was an error"
    	}
    },
    
    arcgis: {
      portal: {
      	metadataButton: {
      		caption: "Metadata"
      	}
      }
    },
    
  	calendar: {
  		button: "Calendar...",
  		title: "Calendar"
  	},
    
  	geoExtent: {
  		button: "Set Geographic Extent...",
  		title: "Geographic Extent",
  		navigate: "Navigate",
  		draw: "Draw a Rectangle",
  		drawHint: "Press down to start and let go to finish."
  	},
  	
    hints: {
    	date: "(yyyy or yyyy-mm or yyyy-mm-dd)",
    	dateTime: "(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",
    	dateOrDateTime: "(yyyy or yyyy-mm or yyyy-mm-dd or yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",
    	delimitedTextArea: "(use comma or newline to separate)",
    	fgdcDate: "(yyyy or yyyy-mm or yyyy-mm-dd)",
    	fgdcTime: "(hh:mm:ss.sss[+-]hh:mm)",
    	integer: "(enter an integer)",
    	latitude: "(decimal degrees)",
    	longitude: "(decimal degrees)",
    	number: "(enter a number)",
    	numberGreaterThanZero: "(enter a number > 0)"
    },
    
    isoTopicCategoryCode: {
    	caption: "Topic Category",
    	boundaries: "Administrative and Political Boundaries",
    	farming: "Agriculture and Farming",
    	climatologyMeteorologyAtmosphere: "Atmosphere and Climatic",
    	biota: "Biology and Ecology",
    	economy: "Business and Economic",
    	planningCadastre: "Cadastral",
    	society: "Cultural, Society and Demography",
    	elevation: "Elevation and Derived Products",
    	environment: "Environment and Conservation",
    	structure: "Facilities and Structures",
    	geoscientificInformation: "Geological and Geophysical",
    	health: "Human Health and Disease",
    	imageryBaseMapsEarthCover: "Imagery and Base Maps",
    	inlandWaters: "Inland Water Resources",
    	location: "Locations and Geodetic Networks",
    	intelligenceMilitary: "Military",
    	oceans: "Oceans and Estuaries",
    	transportation: "Transportation Networks",
    	utilitiesCommunication: "Utilities and Communication"
    },
    
    multiplicity: {
    	moveElementDown: "Move Section Down",
    	moveElementUp: "Move Section Up",
    	removeElement: "Remove Section",
    	repeatElement: "Repeat Section"
    },
    
    serviceTypes: {
  		featureService: "Feature Service",
  		mapService: "Map Service",
  		imageService: "Image Service",
  		wms: "WMS",
  		wfs: "WFS",
  		wcs: "WCS"
    },
    
    validation: {
    	pattern: "{label} - {message}",
    	patternWithHint: "{label} - {message} {hint}",
	    ok: "OK",
	    empty: "A value is required.",
	    date: "The value must be a date.",
	    integer: "The value must be an integer.",
	    number: "The value must be an number.",
	    other: "Invalid value."
    },
    
    validationPane: {
    	clearMessages: "Clear Messages"
    }
    
  }),
	"ar": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lv": 1,
	"lt": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1
});
