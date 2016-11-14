define(
   ({
  	
    documentTypes: {
    	data: {
    		caption: "ã_ISO 19115 (Data)______Ç",
    		description: ""
    	},
    	service: {
    		caption: "ã_ISO 19119 (Service)_______Ç",
    		description: ""
    	},
    	gmi: {
    		caption: "ã_ISO 19115-2 (Imagery and Gridded Data)____________Ç",
    		description: ""
    	}
    },
    
    general: {
    	reference: "ã_Reference____Ç"
    },
    
    sections: {
    	metadata: "ã_Metadata___Ç",
    	identification: "ã_Identification_____Ç",
    	distribution: "ã_Distribution_____Ç",
    	quality: "ã_Quality___Ç",
    	acquisition: "ã_Acquisition____Ç"
    },
    
    metadataSection: {
    	identifier: "ã_Identifier____Ç",
    	contact: "ã_Contact___Ç",
    	date: "ã_Date__Ç",
    	standard: "ã_Standard___Ç",
    	reference: "ã_Reference____Ç"
    },
    
    identificationSection: {
    	citation: "ã_Citation___Ç",
    	description: "ã_Description____Ç",
    	contact: "ã_Contact___Ç",
    	thumbnail: "ã_Thumbnail____Ç",
    	keywords: "ã_Keywords___Ç",
    	constraints: "ã_Constraints____Ç",
    	resource: "ã_Resource___Ç",
    	resourceTab: {
    		representation: "ã_Representation_____Ç",
    		language: "ã_Language___Ç",
    		classification: "ã_Classification_____Ç",
    		extent: "ã_Extent___Ç"
    	},
    	serviceResourceTab: {
    		serviceType: "ã_Service Type_____Ç",
    		extent: "ã_Extent___Ç",
    		couplingType: "ã_Coupling Type_____Ç",
    		operation: "ã_Operation____Ç",
    		operatesOn: "ã_Operates On____Ç"
    	}
    },
    
    distributionSection: {
    },
    
    qualitySection: {
    	scope: "ã_Scope___Ç",
    	conformance: "ã_Conformance____Ç",
    	lineage: "ã_Lineage___Ç"
    },
    
    acquisitionSection: {
    	requirement: "ã_Requirement____Ç",
    	objective: "ã_Objective____Ç",
    	instrument: "ã_Instrument____Ç",
    	plan: "ã_Plan__Ç",
    	operation: "ã_Operation____Ç",
    	platform: "ã_Platform___Ç",
    	environment: "ã_Environment____Ç"
    },
    
    AbstractMD_Identification: {
    	sAbstract: "ã_Abstract___Ç",
    	purpose: "ã_Purpose___Ç",
    	credit: "ã_Credits___Ç",
    	pointOfContact: "ã_Point of Contact______Ç",
    	resourceMaintenance: "ã_Maintenance____Ç",
    	graphicOverview: "ã_Graphic Overview______Ç",
    	descriptiveKeywords: "ã_Keyword Collection______Ç",
    	resourceConstraints: "ã_Constraints____Ç"
    },
    
    CI_Address: {
    	deliveryPoint: "ã_Delivery Point_____Ç",
    	city: "ã_City__Ç",
    	administrativeArea: "ã_Administrative Area_______Ç",
    	postalCode: "ã_Postal Code____Ç",
    	country: "ã_Country___Ç",
    	electronicMailAddress: "ã_E-Mail Address_____Ç"
    },
    
    CI_Citation: {
    	title: "ã_Title___Ç",
    	alternateTitle: "ã_Alternate Title______Ç",
    	identifier: "ã_Unique Resource Identifier_________Ç",
    	resource: {
    		title: "ã_Resource Title_____Ç",
    		date: "ã_Resource Date_____Ç"
    	},
    	specification: {
    		title: "ã_Specification Title_______Ç",
    		date: "ã_Specification Date______Ç"
    	}
    },
    
    CI_Contact: {
    	phone: "ã_Phone___Ç",
    	address: "ã_Address___Ç",
    	onlineResource: "ã_Online Resource______Ç",
    	hoursOfService: "ã_Hours of Service______Ç",
    	contactInstructions: "ã_Contact Instructions_______Ç"
    },
    
    CI_Date: {
    	date: "ã_Date__Ç",
    	dateType: "ã_Date Type____Ç"
    },
    
  	CI_DateTypeCode: {
  		caption: "ã_Date Type____Ç",
  		creation: "ã_Creation Date_____Ç",
  		publication: "ã_Publication Date______Ç",
  		revision: "ã_Revision Date_____Ç"
  	},
  	
    CI_OnLineFunctionCode: {
    	caption: "ã_Function___Ç",
    	download: "ã_Download___Ç",
    	information: "ã_Information____Ç",
    	offlineAccess: "ã_Offline Access_____Ç",
    	order: "ã_Order___Ç",
    	search: "ã_Search___Ç"
    },
    
    CI_OnlineResource: {
    	caption: "ã_Online Resource______Ç",
    	linkage: "ã_URL__Ç",
    	protocol: "ã_Protocol___Ç",
    	applicationProfile: "ã_Application Profile_______Ç",
    	name: "ã_Name__Ç",
    	description: "ã_Description____Ç",
    	sFunction: "ã_Function___Ç"
    },
    
    CI_ResponsibleParty: {
    	caption: "ã_Point of Contact______Ç",
    	individualName: "ã_Individual Name______Ç",
    	organisationName: "ã_Organisation Name______Ç",
    	positionName: "ã_Position Name_____Ç",
    	contactInfo: "ã_Contact Info_____Ç",
    	role: "ã_Role__Ç"
    },
    
    CI_RoleCode: {
    	caption: "ã_Role__Ç",
    	resourceProvider: "ã_Resource Provider______Ç",
    	custodian: "ã_Custodian____Ç",
    	owner: "ã_Owner___Ç",
    	user: "ã_User__Ç",
    	distributor: "ã_Distributor____Ç",
    	originator: "ã_Originator____Ç",
    	pointOfContact: "ã_Point of Contact______Ç",
    	principalInvestigator: "ã_Principal Investigator________Ç",
    	processor: "ã_Processor____Ç",
    	publisher: "ã_Publisher____Ç",
    	author: "ã_Author___Ç"
    },
    
    CI_Telephone: {
    	voice: "ã_Voice___Ç",
    	facsimile: "ã_Fax__Ç"
    },
    
    DCPList: {
    	caption: "ã_DCP__Ç",
    	XML: "ã_XML__Ç",
    	CORBA: "ã_CORBA___Ç",
    	JAVA: "ã_JAVA__Ç",
    	COM: "ã_COM__Ç",
    	SQL: "ã_SQL__Ç",
    	WebServices: "ã_WebServices____Ç"
    },
    
    DQ_ConformanceResult: {
    	caption: "ã_Conformance Result______Ç",
    	explanation: "ã_Explanation____Ç",
    	degree: {
    		caption: "ã_Degree___Ç",
    		validationPerformed: "ã_Validation Performed_______Ç",
    		conformant: "ã_Conformant____Ç",
    		nonConformant: "ã_Non Conformant_____Ç"
    	}
    },
    
    DQ_DataQuality: {
    	report: "ã_Report___Ç"
    },
    
    DQ_Scope : {
    	level: "ã_Scope (quality information applies to)____________Ç",
    	levelDescription: "ã_Level Description______Ç"
    },
    
    EX_Extent: {
    	caption: "ã_Extent___Ç",
    	description: "ã_Description____Ç",
    	geographicElement: "ã_Spatial Extent_____Ç",
    	temporalElement: "ã_Temporal Extent______Ç",
    	verticalElement: "ã_Vertical Extent______Ç"
    },
    
    EX_GeographicBoundingBox: {
    	westBoundLongitude: "ã_West Bounding Longitude________Ç",
    	eastBoundLongitude: "ã_East Bounding Longitude________Ç",
    	southBoundLatitude: "ã_South Bounding Latitude________Ç",
    	northBoundLatitude: "ã_North Bounding Latitude________Ç"
    },
    
    EX_GeographicDescription: {
    	caption: "ã_Geographic Description________Ç"
    },
    
    EX_TemporalExtent: {
    	TimePeriod: {
    		beginPosition: "ã_Begin Date____Ç",
    		endPosition: "ã_End Date___Ç"
    	}
    },
    
    EX_VerticalExtent: {
    	minimumValue: "ã_Minimum Value_____Ç",
    	maximumValue: "ã_Maximum Value_____Ç",
    	verticalCRS: "ã_Vertical CRS_____Ç"
    },
    
    Length: {
    	caption: "ã_Length___Ç",
    	uom: "ã_Units of Measure______Ç",
    	km: "ã_Kilometers____Ç",
    	m: "ã_Meters___Ç",
    	mi: "ã_Miles___Ç",
    	ft: "ã_Feet__Ç"
    },
    
    LI_Lineage: {
    	statement: "ã_Lineage Statement______Ç"
    },
    
    MD_BrowseGraphic: {
    	fileName: "ã_Browse Graphic URL______Ç",
    	fileDescription: "ã_Browse Graphic Caption________Ç",
    	fileType: "ã_Browse Graphic Type_______Ç"
    },
    
    MD_ClassificationCode: {
    	unclassified: "ã_Unclassified_____Ç",
    	restricted: "ã_Restricted____Ç",
    	confidential: "ã_Confidential_____Ç",
    	secret: "ã_Secret___Ç",
    	topSecret: "ã_Top Secret____Ç"
    },
    
    MD_Constraints: {
    	caption: "ã_Usage Constraints______Ç",
    	useLimitation: "ã_Use Limitation_____Ç"
    },
    
    MD_DataIdentification: {
    	spatialRepresentationType: "ã_Spatial Representation Type_________Ç",
    	spatialResolution: "ã_Spatial Resolution______Ç",
    	language: "ã_Resource Language______Ç",
    	supplementalInformation: "ã_Supplemental_____Ç"
    },
    
    MD_DigitalTransferOptions: {
    	onLine: "ã_Online___Ç"
    },
    
    MD_Distribution: {
    	distributionFormat: "ã_Distribution Format_______Ç",
    	transferOptions: "ã_Transfer Options______Ç"
    },
    
    MD_Format: {
    	name: "ã_Format Name____Ç",
    	version: "ã_Format Version_____Ç"
    },
    
    MD_Identifier: {
    	caption: "ã_URI__Ç",
    	identifierCaption: "ã_Identifier____Ç",
    	code: "ã_Code__Ç"
    },
    
    MD_Keywords: {
    	delimitedCaption: "ã_Keywords___Ç",
    	thesaurusName: "ã_Associated Thesaurus_______Ç"
    },
    
    MD_KeywordTypeCode: {
    	caption: "ã_Keyword Type_____Ç",
    	discipline: "ã_Discipline____Ç",
    	place: "ã_Place___Ç",
    	stratum: "ã_Stratum___Ç",
    	temporal: "ã_Temporal___Ç",
    	theme: "ã_Theme___Ç"
    },
    
    MD_LegalConstraints: {
    	caption: "ã_Legal Constraints______Ç",
    	accessConstraints: "ã_Access Constraints______Ç",
    	useConstraints: "ã_Use Constraints______Ç",
    	otherConstraints: "ã_Other Constraints______Ç"
    },
    
    MD_MaintenanceFrequencyCode: {
    	caption: "ã_Frequency____Ç",
    	continual: "ã_Continual____Ç",
    	daily: "ã_Daily___Ç",
    	weekly: "ã_Weekly___Ç",
    	fortnightly: "ã_Fortnightly____Ç",
    	monthly: "ã_Monthly___Ç",
    	quarterly: "ã_Quarterly____Ç",
    	biannually: "ã_Biannually____Ç",
    	annually: "ã_Annually___Ç",
    	asNeeded: "ã_As Needed____Ç",
    	irregular: "ã_Irregular____Ç",
    	notPlanned: "ã_Not Planned____Ç",
    	unknown: "ã_Unknown___Ç"
    },
    
    MD_Metadata: {
    	caption: "ã_Metadata___Ç",
    	fileIdentifier: "ã_File Identifier______Ç",
    	language: "ã_Metadata Language______Ç",
    	hierarchyLevel: "ã_Hierarchy Level______Ç",
    	hierarchyLevelName: "ã_Hierarchy Level Name_______Ç",
    	contact: "ã_Metadata Contact______Ç",
    	dateStamp: "ã_Metadata Date_____Ç",
    	metadataStandardName: "ã_Metadata Standard Name________Ç",
    	metadataStandardVersion: "ã_Metadata Standard Version_________Ç",
    	referenceSystemInfo: "ã_Reference System______Ç",
    	identificationInfo: "ã_Identification_____Ç",
    	distributionInfo: "ã_Distribution_____Ç",
    	dataQualityInfo: "ã_Quality___Ç"
    },
    
    MD_ProgressCode: {
    	caption: "ã_Progress Code_____Ç",
    	completed: "ã_Completed____Ç",
    	historicalArchive: "ã_Historical Archive______Ç",
    	obsolete: "ã_Obsolete___Ç",
    	onGoing: "ã_On Going___Ç",
    	planned: "ã_Planned___Ç",
    	required: "ã_Required___Ç",
    	underDevelopment: "ã_Under Development______Ç"
    },
    
    MD_RepresentativeFraction: {
    	denominator: "ã_Denominator____Ç"
    },
    
    MD_Resolution: {
    	equivalentScale: "ã_Equivalent Scale______Ç",
    	distance: "ã_Distance___Ç"
    },
    
    MD_RestrictionCode: {
    	copyright: "ã_Copyright____Ç",
    	patent: "ã_Patent___Ç",
    	patentPending: "ã_Patent Pending_____Ç",
    	trademark: "ã_Trademark____Ç",
    	license: "ã_License___Ç",
    	intellectualPropertyRights: "ã_Intellectual Property Rights_________Ç",
    	restricted: "ã_Restricted____Ç",
    	otherRestrictions: "ã_Other Restrictions______Ç"
    },
    
    MD_ScopeCode: {
    	attribute: "ã_Attribute____Ç",
    	attributeType: "ã_Attribute type_____Ç",
    	collectionHardware: "ã_Collection hardware_______Ç",
    	collectionSession: "ã_Collection session______Ç",
    	dataset: "ã_Dataset___Ç",
    	series: "ã_Series___Ç",
    	nonGeographicDataset: "ã_Non geographic dataset________Ç",
    	dimensionGroup: "ã_Dimension group______Ç",
    	feature: "ã_Feature___Ç",
    	featureType: "ã_Feature type_____Ç",
    	propertyType: "ã_Property type_____Ç",
    	fieldSession: "ã_Field session_____Ç",
    	software: "ã_Software___Ç",
    	service: "ã_Service___Ç",
    	model: "ã_Model___Ç",
    	tile: "ã_Tile__Ç"
    },
    
    MD_ScopeDescription: {
    	attributes: "ã_Attributes____Ç",
    	features: "ã_Features___Ç",
    	featureInstances: "ã_Feature Instances______Ç",
    	attributeInstances: "ã_Attribute Instances_______Ç",
    	dataset: "ã_Dataset___Ç",
    	other: "ã_Other___Ç"
    },
    
    MD_SecurityConstraints: {
    	caption: "ã_Security Constraints_______Ç",
    	classification: "ã_Classification_____Ç",
    	userNote: "ã_User Note____Ç",
    	classificationSystem: "ã_Classification System_______Ç",
    	handlingDescription: "ã_Handling Description_______Ç"
    },
    
    MD_SpatialRepresentationTypeCode: {
    	caption: "ã_Spatial Representation Type_________Ç",
    	vector: "ã_Vector___Ç",
    	grid: "ã_Grid__Ç",
    	textTable: "ã_Text Table____Ç",
    	tin: "ã_TIN__Ç",
    	stereoModel: "ã_Stereo Model_____Ç",
    	video: "ã_Video___Ç"
    },
    
    MD_TopicCategoryCode: {
    	caption: "ã_Topic Category_____Ç",
    	boundaries: "ã_Administrative and Political Boundaries_____________Ç",
    	farming: "ã_Agriculture and Farming________Ç",
    	climatologyMeteorologyAtmosphere: "ã_Atmosphere and Climatic________Ç",
    	biota: "ã_Biology and Ecology_______Ç",
    	economy: "ã_Business and Economic_______Ç",
    	planningCadastre: "ã_Cadastral____Ç",
    	society: "ã_Cultural, Society and Demography___________Ç",
    	elevation: "ã_Elevation and Derived Products__________Ç",
    	environment: "ã_Environment and Conservation_________Ç",
    	structure: "ã_Facilities and Structures_________Ç",
    	geoscientificInformation: "ã_Geological and Geophysical_________Ç",
    	health: "ã_Human Health and Disease________Ç",
    	imageryBaseMapsEarthCover: "ã_Imagery and Base Maps_______Ç",
    	inlandWaters: "ã_Inland Water Resources________Ç",
    	location: "ã_Locations and Geodetic Networks__________Ç",
    	intelligenceMilitary: "ã_Military___Ç",
    	oceans: "ã_Oceans and Estuaries_______Ç",
    	transportation: "ã_Transportation Networks________Ç",
    	utilitiesCommunication: "ã_Utilities and Communication_________Ç"
    },
    
    MI_ContextCode: {
    	caption: "ã_Context___Ç",
    	acquisition: "ã_Acquisition____Ç",
    	pass: "ã_Pass__Ç",
    	wayPoint: "ã_Waypoint___Ç"
    },
    
    MI_EnvironmentalRecord: {
    	caption: "ã_Environmental Conditions________Ç",
    	averageAirTemperature: "ã_Average Air Temperature________Ç",
    	maxRelativeHumidity: "ã_Maximum Relative Humidity_________Ç",
    	maxAltitude: "ã_Maximum Altitude______Ç",
    	meterologicalConditions: "ã_Meterological Conditions________Ç"
    },
    
    MI_Event: {
    	identifier: "ã_Event Identifier______Ç",
    	time: "ã_Time__Ç",
    	expectedObjectiveReference: "ã_Expected Objective (Objective Identifer)_____________Ç",
    	relatedSensorReference: "ã_Related Sensor (Instrument Identifer)____________Ç",
    	relatedPassReference: "ã_Related Pass (Platform Pass Identifer)____________Ç"
    },

    MI_GeometryTypeCode: {
    	point: "ã_Point___Ç",
    	linear: "ã_Linear___Ç",
    	areal: "ã_Areal___Ç",
    	strip: "ã_Strip___Ç"
    },
    
    MI_Instrument: {
    	citation: "ã_Instrument Citation_______Ç",
    	identifier: "ã_Instrument Identifier_______Ç",
    	sType: "ã_Instrument Type______Ç",
    	description: "ã_Instrument Description________Ç",
    	mountedOn: "ã_Mounted On____Ç",
    	mountedOnPlatformReference: "ã_Mounted On (Platform Identifier)___________Ç"
    },
    
    MI_Metadata: {
    	acquisitionInformation: "ã_Acquisition____Ç"
    },
    
    MI_Objective: {
    	caption: "ã_Objective____Ç",
    	identifier: "ã_Objective Identifier_______Ç",
    	priority: "ã_Priority of Target______Ç",
    	sFunction: "ã_Function of Objective_______Ç",
    	extent: "ã_Extent___Ç",
    	pass: "ã_Platform Pass_____Ç",
    	sensingInstrumentReference: "ã_Sensing Instrument (Instrument Identifier)______________Ç",
    	objectiveOccurrence: "ã_Events___Ç",
    	sections: {
    		identification: "ã_Identification_____Ç",
    		extent: "ã_Extent___Ç",
    		pass: "ã_Pass__Ç",
    		sensingInstrument: "ã_Sensing Instrument______Ç",
    		objectiveOccurrence: "ã_Events___Ç"
    	}
    },
    
    MI_ObjectiveTypeCode: {
    	caption: "ã_Type (Collection Technique for Objective)_____________Ç",
    	instantaneousCollection: "ã_Instantaneous Collection________Ç",
    	persistentView: "ã_Persistent View______Ç",
    	survey: "ã_Survey___Ç"
    },
    
    MI_Operation: {
    	caption: "ã_Operation____Ç",
    	description: "ã_Operation Description_______Ç",
    	citation: "ã_Operation Citation______Ç",
    	identifier: "ã_Operation Identifier_______Ç",
    	status: "ã_Operation Status______Ç",
    	objectiveReference: "ã_Related Objective (Objective Identifier)_____________Ç",
    	planReference: "ã_Related Plan (Plan Identifier)__________Ç",
    	significantEventReference: "ã_Related Event (Event Identifier)___________Ç",
    	platformReference: "ã_Related Platform (Platform Identifier)____________Ç",
    	sections: {
    		identification: "ã_Identification_____Ç",
    		related: "ã_Related___Ç"
    	}
    },
    
    MI_OperationTypeCode: {
    	caption: "ã_Operation Type_____Ç",
    	real: "ã_Real__Ç",
    	simulated: "ã_Simulated____Ç",
    	synthesized: "ã_Synthesized____Ç"
    },
    
    MI_Plan: {
    	sType: "ã_Sampling Geometry for Collecting Data____________Ç",
    	status: "ã_Status of Plan_____Ç",
    	citation: "ã_Citation of Authority Requesting Collection______________Ç",
    	satisfiedRequirementReference: "ã_Satisfied Requirement (Requirement Identifier)_______________Ç",
    	operationReference: "ã_Related Operation (Operation Identifier)_____________Ç"
    },
    
    MI_Platform: {
    	citation: "ã_Platform Citation______Ç",
    	identifier: "ã_Platform Identifier_______Ç",
    	description: "ã_Description of Platform Supporting the Instrument________________Ç",
    	sponsor: "ã_Sponsor Organization for Platform___________Ç",
    	instrument: "ã_Instrument(s) mounted on the platform____________Ç",
    	instrumentReference: "ã_Instrument Identifier_______Ç",
    	sections: {
    		identification: "ã_Identification_____Ç",
    		sponsor: "ã_Sponsor___Ç",
    		instruments: "ã_Instruments____Ç"
    	}
    },
    
    MI_PlatformPass: {
    	identifier: "ã_Platform Pass Identifier________Ç",
    	extent: "ã_Platform Pass Extent_______Ç",
    	relatedEventReference: "ã_Related Event (Event Identifer)__________Ç"
    },

    MI_PriorityCode: {
    	critical: "ã_Critical___Ç", 
    	highImportance: "ã_High Importance______Ç",
    	mediumImportance: "ã_Medium Importance______Ç",
    	lowImportance: "ã_Low Importance_____Ç"
    },
    
    MI_RequestedDate : {
    	requestedDateOfCollection: "ã_Requested Date Of Collection_________Ç",
    	latestAcceptableDate: "ã_Latest Acceptable Date________Ç"
    },
    
    MI_Requirement: {
    	caption: "ã_Requirement____Ç",
    	citation: "ã_Citation for Requirement Guidance Material______________Ç",
    	identifier: "ã_Requirement Identifier________Ç",
    	requestor: "ã_Requestor of Requirement________Ç",
    	recipient: "ã_Recipient of Requirement Results___________Ç",
    	priority: "ã_Requirement Priority_______Ç",
    	requestedDate: "ã_Requested Date_____Ç",
    	expiryDate: "ã_Expiry Date____Ç",
    	satisifiedPlanReference: "ã_Satisfied Plan (Plan Identifier)___________Ç",
    	sections: {
    		identification: "ã_Identification_____Ç",
    		requestor: "ã_Requestor____Ç",
    		recipient: "ã_Recipient____Ç",
    		priorityAndDates: "ã_Priority And Dates______Ç",
    		satisifiedPlan: "ã_Satisified  Plan______Ç"
    	}
    },
    
    MI_SequenceCode: {
    	caption: "ã_Sequence___Ç",
    	start: "ã_Start___Ç",
    	end: "ã_End__Ç",
    	instantaneous: "ã_Instantaneous_____Ç"
    },
    
    MI_TriggerCode: {
    	caption: "ã_Trigger___Ç",
    	automatic: "ã_Automatic____Ç",
    	manual: "ã_Manual___Ç",
    	preProgrammed: "ã_Preprogrammed_____Ç"
    },
    
    ObjectReference: {
    	uuidref: "ã_UUID Reference_____Ç",
    	xlinkref: "ã_URL Reference_____Ç"
    },
    
    RS_Identifier: {
    	caption: "ã_ID Plus Code Space______Ç",
    	code: "ã_Code__Ç",
    	codeSpace: "ã_Code Space____Ç"
    },
    
    SV_CouplingType: {
    	loose: "ã_Loose___Ç",
    	mixed: "ã_Mixed___Ç",
    	tight: "ã_Tight___Ç"
    },
    
    SV_OperationMetadata: {
    	operationName: "ã_Operation Name_____Ç",
    	DCP: "ã_DCP__Ç",
    	connectPoint: "ã_Connect Point_____Ç"
    },
    
    SV_ServiceIdentification: {
    	serviceType: "ã_ServiceType____Ç",
    	couplingType: "ã_Coupling Type_____Ç",
    	containsOperations: "ã_Operation Metadata______Ç",
    	operatesOn: "ã_Operates On____Ç"
    },
    
    TM_Primitive: {
    	indeterminatePosition: "ã_Indeterminate Position________Ç",
    	indeterminates: {
    		before: "ã_Before___Ç",
       	after: "ã_After___Ç",
      	now: "ã_Now__Ç",
      	unknown: "ã_Unknown___Ç"
    	}
    },
    
    gemet: {
    	concept: {
    		gemetConceptKeyword: "ã_GEMET Concept Keyword_______Ç",
    		tool: "ã_Look Up____Ç...",
    		dialogTitle: "ã_GEMET - Concept Keyword________Ç",
    		searchLabel: "ã_Search___Ç:",
    		searchTip: "ã_Search GEMET_____Ç"
    	},
    	theme: {
    		tool: "ã_Look Up____Ç...",
    		dialogTitle: "ã_GEMET - Inspire Data Theme_________Ç"
    	},
    	ioerror: "ã_There was an error communicating with the GEMET service: {url}____________________Ç",
    	searching: "ã_Searching GEMET______Ç...",
    	noMatch: "ã_No matching results were found__________Ç.",
      languages: {
      	"bg": "ã_Bulgarian____Ç",
      	"cs": "ã_Czech___Ç",
      	"da": "ã_Danish___Ç",
      	"nl": "ã_Dutch___Ç",
      	"en": "ã_English___Ç",
      	"et": "ã_Estonian___Ç",
      	"fi": "ã_Finnish___Ç",
      	"fr": "ã_French___Ç",
      	"de": "ã_German___Ç",
      	"el": "ã_Greek___Ç",
      	"hu": "ã_Hungarian____Ç",
      	"ga": "ã_Gaelic (Irish)_____Ç",
      	"it": "ã_Italian___Ç",
      	"lv": "ã_Latvian___Ç",
      	"lt": "ã_Lithuanian____Ç",
      	"mt": "ã_Maltese___Ç",
      	"pl": "ã_Polish___Ç", 
      	"pt": "ã_Portuguese____Ç",
      	"ro": "ã_Romanian___Ç",
      	"sk": "ã_Slovak___Ç",
      	"sl": "ã_Slovenian____Ç",  	
      	"es": "ã_Spanish___Ç",
      	"sv": "ã_Swedish___Ç"
      }
    }
   
  })
);
