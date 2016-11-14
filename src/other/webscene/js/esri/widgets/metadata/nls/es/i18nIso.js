define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "á_ISO 19115 (Data)______Ó",
    		description: ""
    	},
    	service: {
    		caption: "á_ISO 19119 (Service)_______Ó",
    		description: ""
    	},
    	gmi: {
    		caption: "á_ISO 19115-2 (Imagery and Gridded Data)____________Ó",
    		description: ""
    	}
    },
    
    general: {
    	reference: "á_Reference____Ó"
    },
    
    sections: {
    	metadata: "á_Metadata___Ó",
    	identification: "á_Identification_____Ó",
    	distribution: "á_Distribution_____Ó",
    	quality: "á_Quality___Ó",
    	acquisition: "á_Acquisition____Ó"
    },
    
    metadataSection: {
    	identifier: "á_Identifier____Ó",
    	contact: "á_Contact___Ó",
    	date: "á_Date__Ó",
    	standard: "á_Standard___Ó",
    	reference: "á_Reference____Ó"
    },
    
    identificationSection: {
    	citation: "á_Citation___Ó",
    	description: "á_Description____Ó",
    	contact: "á_Contact___Ó",
    	thumbnail: "á_Thumbnail____Ó",
    	keywords: "á_Keywords___Ó",
    	constraints: "á_Constraints____Ó",
    	resource: "á_Resource___Ó",
    	resourceTab: {
    		representation: "á_Representation_____Ó",
    		language: "á_Language___Ó",
    		classification: "á_Classification_____Ó",
    		extent: "á_Extent___Ó"
    	},
    	serviceResourceTab: {
    		serviceType: "á_Service Type_____Ó",
    		extent: "á_Extent___Ó",
    		couplingType: "á_Coupling Type_____Ó",
    		operation: "á_Operation____Ó",
    		operatesOn: "á_Operates On____Ó"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "á_Scope___Ó",
    	conformance: "á_Conformance____Ó",
    	lineage: "á_Lineage___Ó"
    },
    
    acquisitionSection: {
    	requirement: "á_Requirement____Ó",
    	objective: "á_Objective____Ó",
    	instrument: "á_Instrument____Ó",
    	plan: "á_Plan__Ó",
    	operation: "á_Operation____Ó",
    	platform: "á_Platform___Ó",
    	environment: "á_Environment____Ó"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "á_Abstract___Ó",
    	purpose: "á_Purpose___Ó",
    	credit: "á_Credits___Ó",
    	pointOfContact: "á_Point of Contact______Ó",
    	resourceMaintenance: "á_Maintenance____Ó",
    	graphicOverview: "á_Graphic Overview______Ó",
    	descriptiveKeywords: "á_Keyword Collection______Ó",
    	resourceConstraints: "á_Constraints____Ó"
    },
    
    CI_Address: {
    	deliveryPoint: "á_Delivery Point_____Ó",
    	city: "á_City__Ó",
    	administrativeArea: "á_Administrative Area_______Ó",
    	postalCode: "á_Postal Code____Ó",
    	country: "á_Country___Ó",
    	electronicMailAddress: "á_E-Mail Address_____Ó"
    },
    
    CI_Citation: {
    	title: "á_Title___Ó",
    	alternateTitle: "á_Alternate Title______Ó",
    	identifier: "á_Unique Resource Identifier_________Ó",
    	resource: {
    		title: "á_Resource Title_____Ó",
    		date: "á_Resource Date_____Ó"
    	},
    	specification: {
    		title: "á_Specification Title_______Ó",
    		date: "á_Specification Date______Ó"
    	}
    },
    
    CI_Contact: {
    	phone: "á_Phone___Ó",
    	address: "á_Address___Ó",
    	onlineResource: "á_Online Resource______Ó",
    	hoursOfService: "á_Hours of Service______Ó",
    	contactInstructions: "á_Contact Instructions_______Ó"
    },
    
    CI_Date: {
    	date: "á_Date__Ó",
    	dateType: "á_Date Type____Ó"
    },
    
  	CI_DateTypeCode: {
  		caption: "á_Date Type____Ó",
  		creation: "á_Creation Date_____Ó",
  		publication: "á_Publication Date______Ó",
  		revision: "á_Revision Date_____Ó"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "á_Function___Ó",
    	download: "á_Download___Ó",
    	information: "á_Information____Ó",
    	offlineAccess: "á_Offline Access_____Ó",
    	order: "á_Order___Ó",
    	search: "á_Search___Ó"
    },
    
    CI_OnlineResource: {
    	caption: "á_Online Resource______Ó",
    	linkage: "á_URL__Ó",
    	protocol: "á_Protocol___Ó",
    	applicationProfile: "á_Application Profile_______Ó",
    	name: "á_Name__Ó",
    	description: "á_Description____Ó",
    	sFunction: "á_Function___Ó"
    },
    
    CI_ResponsibleParty: {
    	caption: "á_Point of Contact______Ó",
    	individualName: "á_Individual Name______Ó",
    	organisationName: "á_Organisation Name______Ó",
    	positionName: "á_Position Name_____Ó",
    	contactInfo: "á_Contact Info_____Ó",
    	role: "á_Role__Ó"
    },
    
    CI_RoleCode: {
    	caption: "á_Role__Ó",
    	resourceProvider: "á_Resource Provider______Ó",
    	custodian: "á_Custodian____Ó",
    	owner: "á_Owner___Ó",
    	user: "á_User__Ó",
    	distributor: "á_Distributor____Ó",
    	originator: "á_Originator____Ó",
    	pointOfContact: "á_Point of Contact______Ó",
    	principalInvestigator: "á_Principal Investigator________Ó",
    	processor: "á_Processor____Ó",
    	publisher: "á_Publisher____Ó",
    	author: "á_Author___Ó"
    },
    
    CI_Telephone: {
    	voice: "á_Voice___Ó",
    	facsimile: "á_Fax__Ó"
    },
    
    DCPList: {
    	caption: "á_DCP__Ó",
    	XML: "á_XML__Ó",
    	CORBA: "á_CORBA___Ó",
    	JAVA: "á_JAVA__Ó",
    	COM: "á_COM__Ó",
    	SQL: "á_SQL__Ó",
    	WebServices: "á_WebServices____Ó"
    },
    
    DQ_ConformanceResult: {
    	caption: "á_Conformance Result______Ó",
    	explanation: "á_Explanation____Ó",
    	degree: {
    		caption: "á_Degree___Ó",
    		validationPerformed: "á_Validation Performed_______Ó",
    		conformant: "á_Conformant____Ó",
    		nonConformant: "á_Non Conformant_____Ó"
    	}
    },
    
    DQ_DataQuality: {
    	report: "á_Report___Ó"
    },
    
    DQ_Scope : {
    	level: "á_Scope (quality information applies to)____________Ó",
    	levelDescription: "á_Level Description______Ó"
    },
    
    EX_Extent: {
    	caption: "á_Extent___Ó",
    	description: "á_Description____Ó",
    	geographicElement: "á_Spatial Extent_____Ó",
    	temporalElement: "á_Temporal Extent______Ó",
    	verticalElement: "á_Vertical Extent______Ó"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "á_West Bounding Longitude________Ó",
    	eastBoundLongitude: "á_East Bounding Longitude________Ó",
    	southBoundLatitude: "á_South Bounding Latitude________Ó",
    	northBoundLatitude: "á_North Bounding Latitude________Ó"
    },
    
    EX_GeographicDescription: {
    	caption: "á_Geographic Description________Ó"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "á_Begin Date____Ó",
    		endPosition: "á_End Date___Ó"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "á_Minimum Value_____Ó",
    	maximumValue: "á_Maximum Value_____Ó",
    	verticalCRS: "á_Vertical CRS_____Ó"
    },
    
    Length: {
    	caption: "á_Length___Ó",
    	uom: "á_Units of Measure______Ó",
    	km: "á_Kilometers____Ó",
    	m: "á_Meters___Ó",
    	mi: "á_Miles___Ó",
    	ft: "á_Feet__Ó"
    },
    
    LI_Lineage: {
    	statement: "á_Lineage Statement______Ó"
    },
    
    MD_BrowseGraphic: {
    	fileName: "á_Browse Graphic URL______Ó",
    	fileDescription: "á_Browse Graphic Caption________Ó",
    	fileType: "á_Browse Graphic Type_______Ó"
    },
    
    MD_ClassificationCode: {
    	unclassified: "á_Unclassified_____Ó",
    	restricted: "á_Restricted____Ó",
    	confidential: "á_Confidential_____Ó",
    	secret: "á_Secret___Ó",
    	topSecret: "á_Top Secret____Ó"
    },
    
    MD_Constraints: {
    	caption: "á_Usage Constraints______Ó",
    	useLimitation: "á_Use Limitation_____Ó"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "á_Spatial Representation Type_________Ó",
    	spatialResolution: "á_Spatial Resolution______Ó",
    	language: "á_Resource Language______Ó",
    	supplementalInformation: "á_Supplemental_____Ó"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "á_Online___Ó"
    },
    
    MD_Distribution: {
    	distributionFormat: "á_Distribution Format_______Ó",
    	transferOptions: "á_Transfer Options______Ó"
    },
    
    MD_Format: {
    	name: "á_Format Name____Ó",
    	version: "á_Format Version_____Ó"
    },
    
    MD_Identifier: {
    	caption: "á_URI__Ó",
    	identifierCaption: "á_Identifier____Ó",
    	code: "á_Code__Ó"
    },
    
    MD_Keywords: {
    	delimitedCaption: "á_Keywords___Ó",
    	thesaurusName: "á_Associated Thesaurus_______Ó"
    },
    
    MD_KeywordTypeCode: {
    	caption: "á_Keyword Type_____Ó",
    	discipline: "á_Discipline____Ó",
    	place: "á_Place___Ó",
    	stratum: "á_Stratum___Ó",
    	temporal: "á_Temporal___Ó",
    	theme: "á_Theme___Ó"
    },
    
    MD_LegalConstraints: {
    	caption: "á_Legal Constraints______Ó",
    	accessConstraints: "á_Access Constraints______Ó",
    	useConstraints: "á_Use Constraints______Ó",
    	otherConstraints: "á_Other Constraints______Ó"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "á_Frequency____Ó",
    	continual: "á_Continual____Ó",
    	daily: "á_Daily___Ó",
    	weekly: "á_Weekly___Ó",
    	fortnightly: "á_Fortnightly____Ó",
    	monthly: "á_Monthly___Ó",
    	quarterly: "á_Quarterly____Ó",
    	biannually: "á_Biannually____Ó",
    	annually: "á_Annually___Ó",
    	asNeeded: "á_As Needed____Ó",
    	irregular: "á_Irregular____Ó",
    	notPlanned: "á_Not Planned____Ó",
    	unknown: "á_Unknown___Ó"
    },
    
    MD_Metadata: {
    	caption: "á_Metadata___Ó",
    	fileIdentifier: "á_File Identifier______Ó",
    	language: "á_Metadata Language______Ó",
    	hierarchyLevel: "á_Hierarchy Level______Ó",
    	hierarchyLevelName: "á_Hierarchy Level Name_______Ó",
    	contact: "á_Metadata Contact______Ó",
    	dateStamp: "á_Metadata Date_____Ó",
    	metadataStandardName: "á_Metadata Standard Name________Ó",
    	metadataStandardVersion: "á_Metadata Standard Version_________Ó",
    	referenceSystemInfo: "á_Reference System______Ó",
    	identificationInfo: "á_Identification_____Ó",
    	distributionInfo: "á_Distribution_____Ó",
    	dataQualityInfo: "á_Quality___Ó"
    },
    
    MD_ProgressCode: {
    	caption: "á_Progress Code_____Ó",
    	completed: "á_Completed____Ó",
    	historicalArchive: "á_Historical Archive______Ó",
    	obsolete: "á_Obsolete___Ó",
    	onGoing: "á_On Going___Ó",
    	planned: "á_Planned___Ó",
    	required: "á_Required___Ó",
    	underDevelopment: "á_Under Development______Ó"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "á_Denominator____Ó"
    },
    
    MD_Resolution: {
    	equivalentScale: "á_Equivalent Scale______Ó",
    	distance: "á_Distance___Ó"
    },
    
    MD_RestrictionCode: {
    	copyright: "á_Copyright____Ó",
    	patent: "á_Patent___Ó",
    	patentPending: "á_Patent Pending_____Ó",
    	trademark: "á_Trademark____Ó",
    	license: "á_License___Ó",
    	intellectualPropertyRights: "á_Intellectual Property Rights_________Ó",
    	restricted: "á_Restricted____Ó",
    	otherRestrictions: "á_Other Restrictions______Ó"
    },
    
    MD_ScopeCode: {
    	attribute: "á_Attribute____Ó",
    	attributeType: "á_Attribute type_____Ó",
    	collectionHardware: "á_Collection hardware_______Ó",
    	collectionSession: "á_Collection session______Ó",
    	dataset: "á_Dataset___Ó",
    	series: "á_Series___Ó",
    	nonGeographicDataset: "á_Non geographic dataset________Ó",
    	dimensionGroup: "á_Dimension group______Ó",
    	feature: "á_Feature___Ó",
    	featureType: "á_Feature type_____Ó",
    	propertyType: "á_Property type_____Ó",
    	fieldSession: "á_Field session_____Ó",
    	software: "á_Software___Ó",
    	service: "á_Service___Ó",
    	model: "á_Model___Ó",
    	tile: "á_Tile__Ó"
    },
    
    MD_ScopeDescription: {
    	attributes: "á_Attributes____Ó",
    	features: "á_Features___Ó",
    	featureInstances: "á_Feature Instances______Ó",
    	attributeInstances: "á_Attribute Instances_______Ó",
    	dataset: "á_Dataset___Ó",
    	other: "á_Other___Ó"
    },
    
    MD_SecurityConstraints: {
    	caption: "á_Security Constraints_______Ó",
    	classification: "á_Classification_____Ó",
    	userNote: "á_User Note____Ó",
    	classificationSystem: "á_Classification System_______Ó",
    	handlingDescription: "á_Handling Description_______Ó"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "á_Spatial Representation Type_________Ó",
    	vector: "á_Vector___Ó",
    	grid: "á_Grid__Ó",
    	textTable: "á_Text Table____Ó",
    	tin: "á_TIN__Ó",
    	stereoModel: "á_Stereo Model_____Ó",
    	video: "á_Video___Ó"
    },
    
    MD_TopicCategoryCode: {
    	caption: "á_Topic Category_____Ó",
    	boundaries: "á_Administrative and Political Boundaries_____________Ó",
    	farming: "á_Agriculture and Farming________Ó",
    	climatologyMeteorologyAtmosphere: "á_Atmosphere and Climatic________Ó",
    	biota: "á_Biology and Ecology_______Ó",
    	economy: "á_Business and Economic_______Ó",
    	planningCadastre: "á_Cadastral____Ó",
    	society: "á_Cultural, Society and Demography___________Ó",
    	elevation: "á_Elevation and Derived Products__________Ó",
    	environment: "á_Environment and Conservation_________Ó",
    	structure: "á_Facilities and Structures_________Ó",
    	geoscientificInformation: "á_Geological and Geophysical_________Ó",
    	health: "á_Human Health and Disease________Ó",
    	imageryBaseMapsEarthCover: "á_Imagery and Base Maps_______Ó",
    	inlandWaters: "á_Inland Water Resources________Ó",
    	location: "á_Locations and Geodetic Networks__________Ó",
    	intelligenceMilitary: "á_Military___Ó",
    	oceans: "á_Oceans and Estuaries_______Ó",
    	transportation: "á_Transportation Networks________Ó",
    	utilitiesCommunication: "á_Utilities and Communication_________Ó"
    },
    
    MI_ContextCode: {
    	caption: "á_Context___Ó",
    	acquisition: "á_Acquisition____Ó",
    	pass: "á_Pass__Ó",
    	wayPoint: "á_Waypoint___Ó"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "á_Environmental Conditions________Ó",
    	averageAirTemperature: "á_Average Air Temperature________Ó",
    	maxRelativeHumidity: "á_Maximum Relative Humidity_________Ó",
    	maxAltitude: "á_Maximum Altitude______Ó",
    	meterologicalConditions: "á_Meterological Conditions________Ó"
    },
    
    MI_Event: {
    	identifier: "á_Event Identifier______Ó",
    	time: "á_Time__Ó",
    	expectedObjectiveReference: "á_Expected Objective (Objective Identifer)_____________Ó",
    	relatedSensorReference: "á_Related Sensor (Instrument Identifer)____________Ó",
    	relatedPassReference: "á_Related Pass (Platform Pass Identifer)____________Ó"
    },

    MI_GeometryTypeCode: {
    	point: "á_Point___Ó",
    	linear: "á_Linear___Ó",
    	areal: "á_Areal___Ó",
    	strip: "á_Strip___Ó"
    },
    
    MI_Instrument: {
    	citation: "á_Instrument Citation_______Ó",
    	identifier: "á_Instrument Identifier_______Ó",
    	sType: "á_Instrument Type______Ó",
    	description: "á_Instrument Description________Ó",
    	mountedOn: "á_Mounted On____Ó",
    	mountedOnPlatformReference: "á_Mounted On (Platform Identifier)___________Ó"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "á_Acquisition____Ó"
    },
    
    MI_Objective: {
    	caption: "á_Objective____Ó",
    	identifier: "á_Objective Identifier_______Ó",
    	priority: "á_Priority of Target______Ó",
    	sFunction: "á_Function of Objective_______Ó",
    	extent: "á_Extent___Ó",
    	pass: "á_Platform Pass_____Ó",
    	sensingInstrumentReference: "á_Sensing Instrument (Instrument Identifier)______________Ó",
    	objectiveOccurrence: "á_Events___Ó",
    	sections: {
    		identification: "á_Identification_____Ó",
    		extent: "á_Extent___Ó",
    		pass: "á_Pass__Ó",
    		sensingInstrument: "á_Sensing Instrument______Ó",
    		objectiveOccurrence: "á_Events___Ó"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "á_Type (Collection Technique for Objective)_____________Ó",
    	instantaneousCollection: "á_Instantaneous Collection________Ó",
    	persistentView: "á_Persistent View______Ó",
    	survey: "á_Survey___Ó"
    },
    
    MI_Operation: {
    	caption: "á_Operation____Ó",
    	description: "á_Operation Description_______Ó",
    	citation: "á_Operation Citation______Ó",
    	identifier: "á_Operation Identifier_______Ó",
    	status: "á_Operation Status______Ó",
    	objectiveReference: "á_Related Objective (Objective Identifier)_____________Ó",
    	planReference: "á_Related Plan (Plan Identifier)__________Ó",
    	significantEventReference: "á_Related Event (Event Identifier)___________Ó",
    	platformReference: "á_Related Platform (Platform Identifier)____________Ó",
    	sections: {
    		identification: "á_Identification_____Ó",
    		related: "á_Related___Ó"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "á_Operation Type_____Ó",
    	real: "á_Real__Ó",
    	simulated: "á_Simulated____Ó",
    	synthesized: "á_Synthesized____Ó"
    },
    
    MI_Plan: {
    	sType: "á_Sampling Geometry for Collecting Data____________Ó",
    	status: "á_Status of Plan_____Ó",
    	citation: "á_Citation of Authority Requesting Collection______________Ó",
    	satisfiedRequirementReference: "á_Satisfied Requirement (Requirement Identifier)_______________Ó",
    	operationReference: "á_Related Operation (Operation Identifier)_____________Ó"
    },
    
    MI_Platform: {
    	citation: "á_Platform Citation______Ó",
    	identifier: "á_Platform Identifier_______Ó",
    	description: "á_Description of Platform Supporting the Instrument________________Ó",
    	sponsor: "á_Sponsor Organization for Platform___________Ó",
    	instrument: "á_Instrument(s) mounted on the platform____________Ó",
    	instrumentReference: "á_Instrument Identifier_______Ó",
    	sections: {
    		identification: "á_Identification_____Ó",
    		sponsor: "á_Sponsor___Ó",
    		instruments: "á_Instruments____Ó"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "á_Platform Pass Identifier________Ó",
    	extent: "á_Platform Pass Extent_______Ó",
    	relatedEventReference: "á_Related Event (Event Identifer)__________Ó"
    },

    MI_PriorityCode: {
    	critical: "á_Critical___Ó", 
    	highImportance: "á_High Importance______Ó",
    	mediumImportance: "á_Medium Importance______Ó",
    	lowImportance: "á_Low Importance_____Ó"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "á_Requested Date Of Collection_________Ó",
    	latestAcceptableDate: "á_Latest Acceptable Date________Ó"
    },
    
    MI_Requirement: {
    	caption: "á_Requirement____Ó",
    	citation: "á_Citation for Requirement Guidance Material______________Ó",
    	identifier: "á_Requirement Identifier________Ó",
    	requestor: "á_Requestor of Requirement________Ó",
    	recipient: "á_Recipient of Requirement Results___________Ó",
    	priority: "á_Requirement Priority_______Ó",
    	requestedDate: "á_Requested Date_____Ó",
    	expiryDate: "á_Expiry Date____Ó",
    	satisifiedPlanReference: "á_Satisfied Plan (Plan Identifier)___________Ó",
    	sections: {
    		identification: "á_Identification_____Ó",
    		requestor: "á_Requestor____Ó",
    		recipient: "á_Recipient____Ó",
    		priorityAndDates: "á_Priority And Dates______Ó",
    		satisifiedPlan: "á_Satisified  Plan______Ó"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "á_Sequence___Ó",
    	start: "á_Start___Ó",
    	end: "á_End__Ó",
    	instantaneous: "á_Instantaneous_____Ó"
    },
    
    MI_TriggerCode: {
    	caption: "á_Trigger___Ó",
    	automatic: "á_Automatic____Ó",
    	manual: "á_Manual___Ó",
    	preProgrammed: "á_Preprogrammed_____Ó"
    },
    
    ObjectReference: {
    	uuidref: "á_UUID Reference_____Ó",
    	xlinkref: "á_URL Reference_____Ó"
    },
    
    RS_Identifier: {
    	caption: "á_ID Plus Code Space______Ó",
    	code: "á_Code__Ó",
    	codeSpace: "á_Code Space____Ó"
    },
    
    SV_CouplingType: {
    	loose: "á_Loose___Ó",
    	mixed: "á_Mixed___Ó",
    	tight: "á_Tight___Ó"
    },
    
    SV_OperationMetadata: {
    	operationName: "á_Operation Name_____Ó",
    	DCP: "á_DCP__Ó",
    	connectPoint: "á_Connect Point_____Ó"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "á_ServiceType____Ó",
    	couplingType: "á_Coupling Type_____Ó",
    	containsOperations: "á_Operation Metadata______Ó",
    	operatesOn: "á_Operates On____Ó"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "á_Indeterminate Position________Ó",
    	indeterminates: {
    		before: "á_Before___Ó",
       	after: "á_After___Ó",
      	now: "á_Now__Ó",
      	unknown: "á_Unknown___Ó"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "á_GEMET Concept Keyword_______Ó",
    		tool: "á_Look Up____Ó...",
    		dialogTitle: "á_GEMET - Concept Keyword________Ó",
    		searchLabel: "á_Search___Ó:",
    		searchTip: "á_Search GEMET_____Ó"
    	},
    	theme: {
    		tool: "á_Look Up____Ó...",
    		dialogTitle: "á_GEMET - Inspire Data Theme_________Ó"
    	},
    	ioerror: "á_There was an error communicating with the GEMET service: {url}____________________Ó",
    	searching: "á_Searching GEMET______Ó...",
    	noMatch: "á_No matching results were found__________Ó.",
      languages: {
      	"bg": "á_Bulgarian____Ó",
      	"cs": "á_Czech___Ó",
      	"da": "á_Danish___Ó",
      	"nl": "á_Dutch___Ó",
      	"en": "á_English___Ó",
      	"et": "á_Estonian___Ó",
      	"fi": "á_Finnish___Ó",
      	"fr": "á_French___Ó",
      	"de": "á_German___Ó",
      	"el": "á_Greek___Ó",
      	"hu": "á_Hungarian____Ó",
      	"ga": "á_Gaelic (Irish)_____Ó",
      	"it": "á_Italian___Ó",
      	"lv": "á_Latvian___Ó",
      	"lt": "á_Lithuanian____Ó",
      	"mt": "á_Maltese___Ó",
      	"pl": "á_Polish___Ó", 
      	"pt": "á_Portuguese____Ó",
      	"ro": "á_Romanian___Ó",
      	"sk": "á_Slovak___Ó",
      	"sl": "á_Slovenian____Ó",  	
      	"es": "á_Spanish___Ó",
      	"sv": "á_Swedish___Ó"
      }
    }
   
  })
);
