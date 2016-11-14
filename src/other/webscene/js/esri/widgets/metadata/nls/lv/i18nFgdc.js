define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "ķ_FGDC__ū",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "ķ_None__ū",
    	notComplete: "ķ_Not complete_____ū",
    	other: "ķ_Other___ū",
    	present: "ķ_Present___ū",
    	unknown: "ķ_Unknown___ū",
    	unpublishedMaterial: "ķ_Unpublished material_______ū"
    },
    
    hints: {
    	integerGreaterThanOne: "ķ_(enter an integer > 1)________ū",
    	integer0To100: "ķ_(enter an integer 0..100)_________ū"
    },
    
    citeinfo: {
    	caption: "ķ_Citation Information_______ū",
    	origin: "ķ_Originator____ū",
    	pubdate: "ķ_Publication Date______ū",
    	pubtime: "ķ_Publication Time______ū",
    	title: "ķ_Title___ū",
    	edition: "ķ_Edition___ū",
    	geoform: {
    		caption: "ķ_Geospatial Data Presentation Form___________ū",
    		atlas: "ķ_Atlas___ū",
    		audio: "ķ_Audio___ū",
    		diagram: "ķ_Diagram___ū",
    		sDocument: "ķ_Document___ū",
    		globe: "ķ_Globe___ū",
    		map: "ķ_Map__ū",
    		model: "ķ_Model___ū",
    		multiMediaPresentation: "ķ_Multimedia presentation________ū",
    		profile: "ķ_Profile___ū",
    		rasterDigitalData: "ķ_Raster digital data_______ū",
    		remoteSensingImage: "ķ_Remote-sensing image_______ū",
    		section: "ķ_Section___ū",
    		spreadsheet: "ķ_Spreadsheet____ū",
    		tabularDigitalData: "ķ_Tabular digital data_______ū",
    		vectorDigitalData: "ķ_Vector digital data_______ū",
    		video: "ķ_Video___ū",
    		view: "ķ_View__ū"
    	},
    	serinfo: {
    		caption: "ķ_Series Information______ū",
    		sername: "ķ_Series Name____ū",
    		issue: "ķ_Issue Identification_______ū"
    	},
    	pubinfo: {
    		caption: "ķ_Publication Information________ū",
    		pubplace: "ķ_Publication Place______ū",
    		publish: "ķ_Publisher____ū"
    	},
    	othercit: "ķ_Other Citation Details________ū",
    	onlink: "ķ_Online Linkage (URL)_______ū"
    },
    
    cntinfo: {
    	caption: "ķ_Contact Information_______ū",
    	section: {
    		primary: "ķ_Primary___ū",
    		phoneAndEmail: "ķ_Phone and E-Mail______ū",
    		hoursAndInstructions: "ķ_Hours and Instructions________ū"
    	},
    	cntorgp: {
    		caption: "ķ_By organization______ū",
    		cntorg: "ķ_Organization_____ū",
    		cntper: "ķ_Person___ū"
    	},
    	cntperp: {
    		caption: "ķ_By person____ū",
    		cntper: "ķ_Person___ū",
    		cntorg: "ķ_Organization_____ū"
    	},
    	cntpos: "ķ_Position___ū",
    	cntaddr: {
    		caption: "ķ_Address___ū",
    		addrtype: {
    			caption: "ķ_Address Type_____ū",
    			mailing: "ķ_Mailing___ū",
    			physical: "ķ_Physical___ū",
    			mailingAndPhysical: "ķ_Mailing and Physical_______ū"
    		},
    		address: "ķ_Address___ū",
    		city: "ķ_City__ū",
    		state: "ķ_State___ū",
    		postal: "ķ_Postal Code____ū",
    		country: "ķ_Country___ū"
    	},
    	cntvoice: "ķ_Voice___ū",
    	cnttdd: "ķ_TDD/TTY Telephone (hearing impaired)____________ū",
    	cntfax: "ķ_Fax__ū",
    	cntemail: "ķ_E-Mail Address_____ū",
    	hours: "ķ_Hours___ū",
    	cntinst: "ķ_Instructions_____ū"
    },
    
    dataqual: {
    	caption: "ķ_Data Quality Information________ū",
    	section: {
    		attributeAccuracy: "ķ_Attribute Accuracy______ū",
    		logicalConsistency: "ķ_Logical Consistency_______ū",
    		completeness: "ķ_Completeness_____ū",
    		positionalAccuracy: "ķ_Positional Accuracy_______ū",
    		lineage: "ķ_Lineage___ū",
    		cloudCover: "ķ_Cloud Cover____ū"
    	},
    	attracc: {
    		caption: "ķ_Attribute Accuracy______ū",
    		attraccr: "ķ_Attribute Accuracy Report_________ū",
    		qattracc: {
    			caption: "ķ_Quantitative Attribute Accuracy Assessment______________ū",
    			attraccv: "ķ_Attribute Accuracy Value________ū",
    			attracce: "ķ_Attribute Accuracy Explanation__________ū"
    		}
    	},
    	logic: "ķ_Logical Consistency Report_________ū",
    	complete: "ķ_Completeness Report_______ū",
    	posacc: "ķ_Positional Accuracy_______ū",
    	horizpa: {
    		caption: "ķ_Horizontal Positional Accuracy__________ū",
    		horizpar: "ķ_Horizontal Positional Accuracy Report____________ū",
    		qhorizpa: {
    			caption: "ķ_Quantitative Horizontal Positional Accuracy Assessment_________________ū",
    			horizpav: "ķ_Horizontal Positional Accuracy Value____________ū",
    			horizpae: "ķ_Horizontal Positional Accuracy Explanation______________ū"
    		}
    	},
    	vertacc: {
    		caption: "ķ_Vertical Positional Accuracy_________ū",
    		vertaccr: "ķ_Vertical Positional Accuracy Report____________ū",
    		qvertpa: {
    			caption: "ķ_Quantitative Vertical Positional Accuracy Assessment_________________ū",
    			vertaccv: "ķ_Vertical Positional Accuracy Value___________ū",
    			vertacce: "ķ_Vertical Positional Accuracy Explanation_____________ū"
    		}
    	},
    	lineage: {
    		caption: "ķ_Lineage___ū"
    	},
    	srcinfo: {
    		caption: "ķ_Source Information______ū",
    		srccite: "ķ_Source Citation______ū",
    		srcscale: "ķ_Source Scale Denominator________ū",
    		typesrc: {
    			caption: "ķ_Type of Source Media_______ū",
    			paper: "ķ_Paper___ū",
    			stableBaseMaterial: "ķ_Stable-base material_______ū",
    			microfiche: "ķ_Microfiche____ū",
    			microfilm: "ķ_Microfilm____ū",
    			audiocassette: "ķ_Audio cassette_____ū",
    			chart: "ķ_Chart___ū",
    			filmstrip: "ķ_Film strip____ū",
    			transparency: "ķ_Transparency_____ū",
    			videocassette: "ķ_Video cassette_____ū",
    			videodisc: "ķ_Video disc____ū",
    			videotape: "ķ_Video tape____ū",
    			physicalModel: "ķ_Physical model_____ū",
    			computerProgram: "ķ_Computer program______ū",
    			disc: "ķ_Disc__ū",
    			cartridgeTape: "ķ_Cartridge tape_____ū",
    			magneticTape: "ķ_Magnetic tape_____ū",
    			online: "ķ_Online___ū",
    			cdrom: "ķ_CD-ROM___ū",
    			electronicBulletinBoard: "ķ_Electronic bulletin board_________ū",
    			electronicMailSystem: "ķ_Electronic mail system________ū"
    		},
    		srctime: "ķ_Source Time Period of Content__________ū",
    		srccurr: "ķ_Source Currentness Reference_________ū",
    		srccitea: "ķ_Source Citation Abbreviation_________ū",
    		srccontr: "ķ_Source Contribution_______ū"
    	},
    	procstep: {
    		caption: "ķ_Process Step_____ū",
    		procdesc: "ķ_Process Description_______ū",
    		srcused: "ķ_Source Used Citation Abbreviation___________ū",
    		procdate: "ķ_Process Date_____ū",
    		proctime: "ķ_Process Time_____ū",
    		srcprod: "ķ_Source Produced Citation Abbreviation____________ū",
    		proccont: "ķ_Process Contact______ū"
    	},
    	cloud: "ķ_Cloud Cover____ū"
    },
    
    distinfo: {
    	caption: "ķ_Distribution Information________ū",
    	section: {
    		distributor: "ķ_Distributor____ū",
    		description: "ķ_Description____ū",
    		orderProcess: "ķ_Order Process_____ū",
    		prerequisites: "ķ_Prerequisites_____ū",
    		availability: "ķ_Availability_____ū"
    	},
    	distrib: "ķ_Distributor____ū",
    	resdesc: {
    		caption: "ķ_Resource Description_______ū",
    		liveData: "ķ_Live Data and Maps______ū",
    		downloadableData: "ķ_Downloadable Data______ū",
    		offlineData: "ķ_Offline Data_____ū",
    		staticMapImages: "ķ_Static Map Images______ū",
    		sDocument: "ķ_Other Documents______ū",
    		application: "ķ_Applications_____ū",
    		geographicService: "ķ_Geographic Services_______ū",
    		clearingHouse: "ķ_Clearinghouses_____ū",
    		mapFiles: "ķ_Map Files____ū",
    		geographicActivies: "ķ_Geographic Activities_______ū"
    	},
    	distliab: "ķ_Distribution Liability Statement___________ū",
    	custom: "ķ_Custom Order Process_______ū",
    	techpreq: "ķ_Technical Prerequisites________ū",
    	availabl: "ķ_Availability_____ū"
    },
    
    eainfo: {
    	caption: "ķ_Entity and Attribute Information___________ū",
    	overview: "ķ_Overview Description_______ū",
    	eaover: "ķ_Entity and Attribute Overview__________ū",
    	eadetcit: "ķ_Entity and Attribute Detail Citation____________ū"
    },
    
    idinfo: {
    	caption: "ķ_Identification Information_________ū",
    	section: {
    		timeAndStatus: "ķ_Time and Status______ū",
    		constraints: "ķ_Constraints____ū",
    		contact: "ķ_Contact___ū",
    		additional: "ķ_Additional____ū"
    	},
    	citeinfo: "ķ_Citation___ū",
    	descript: {
    		caption: "ķ_Description____ū",
    		sAbstract: "ķ_Abstract___ū",
    		purpose: "ķ_Purpose___ū",
    		supplinf: "ķ_Supplemental Information________ū"
    	},
    	timeperd: {
    		caption: "ķ_Time Period of Content________ū",
    		current: {
    			caption: "ķ_Currentness Reference_______ū",
    			groundCondition: "ķ_Ground Condition______ū",
    			publicationDate: "ķ_Publication Date______ū"
    		}
    	},
    	status: {
    		caption: "ķ_Status___ū",
    		progress: {
    			caption: "ķ_Progress___ū",
     			complete: "ķ_Complete___ū",
    			inWork: "ķ_In work___ū",
    			planned: "ķ_Planned___ū"
    		},
    		update: {
    			caption: "ķ_Maintenance and Update Frequency___________ū",
    			continual: "ķ_Continual____ū",
    			daily: "ķ_Daily___ū",
    			weekly: "ķ_Weekly___ū",
    			monthly: "ķ_Monthly___ū",
    			annually: "ķ_Annually___ū",
    			unknown: "ķ_Unknown___ū",
    			asNeeded: "ķ_As needed____ū",
    			irregular: "ķ_Irregular____ū",
    			nonePlanned: "ķ_None planned_____ū"
    		}
    	},
    	spdom: {
    		caption: "ķ_Extent___ū",
    		bounding: {
    			caption: "ķ_Bounding Coordinates_______ū",
    			westbc: "ķ_West Bounding Longitude________ū",
    			eastbc: "ķ_East Bounding Longitude________ū",
    			northbc: "ķ_North Bounding Latitude________ū",
    			southbc: "ķ_South Bounding Latitude________ū"
    		}
    	},
      keywords: {
        caption: "Atslēgas vārdi",
        theme: "Tēma",
        place: "Vieta",
        stratum: "Noslāņojums",
        temporal: "Pagaidu",
        thesaursus: "Saistītais tēzaurs",
        delimited: "Atslēgas vārdi",
        themektIsoTopicCategory: "ISO tēma...",
        themektIsoTopicDialog: "ISO tēma",
        placektGnis: "Ģeogrāfisko nosaukumu informācijas sistēma"
      },
      accconst: "Piekļuves ierobežojumi",
      useconst: "Lietošanas ierobežojumi",
      ptcontac: "Resursa kontaktinformācija",
      browse: {
      	caption: "ķ_Browse Graphic_____ū",
      	browsen: "ķ_Browse Graphic URL______ū",
      	browsed: "ķ_Browse Graphic File Description__________ū",
      	browset: "ķ_Browse Graphic File Type________ū"
      },
      datacred: "Datu kopas kredīts",
      secinfo: {
      	caption: "ķ_Security Information_______ū",
      	secsys: "ķ_Security Classification System__________ū",
      	secclass: {
      		caption: "ķ_Security Classification________ū",
      		topSecret: "ķ_Top secret____ū",
      		secret: "ķ_Secret___ū",
      		confidential: "ķ_Confidential_____ū",
      		restricted: "ķ_Restricted____ū",
      		unclassified: "ķ_Unclassified_____ū",
      		sensitive: "ķ_Sensitive____ū"
      	},
      	sechandl: "ķ_Security Handling Description__________ū"
      },
      sNative: "Vietējo datu kopas vide",
      crossref: "Iekšējā atsauce"
    },
    
    metadata: {
    	idinfo: "ķ_Identification_____ū",
    	dataqual: "ķ_Quality___ū",
    	spdoinfo: "ķ_Spatial Data Organization_________ū",
    	spref: "ķ_Spatial Reference______ū",
    	eainfo: "ķ_Entity and Attribute_______ū",
    	distinfo: "ķ_Distribution_____ū",
    	metainfo: "ķ_Metadata___ū"
    },
    
    metainfo: {
    	caption: "ķ_Metadata Information_______ū",
    	section: {
    		dates: "ķ_Metadata Dates_____ū",
    		contact: "ķ_Metadata Contact______ū",
    		standard: "ķ_Metadata Standard______ū",
    		additional: "ķ_Additional____ū"
    	},
      metd: "Metadatu datums",
      metrd: "Metadatu pārskatīšanas datums",
      metfrd: "Metadatu nākamās pārskatīšanas datums",
      metstdn: "Metadatu standarta nosaukums",
      metstdv: "Metadatu standarta versija",
      metac: "Metadatu piekļuves ierobežojumi",
      metuc: "Metadatu izmantošanas ierobežojumi",
      metsi: {
      	caption: "ķ_Metadata Security Information__________ū",
      	metscs: "ķ_Metadata Security Classification System_____________ū",
      	metsc: "ķ_Metadata Security Classification___________ū",
      	metshd: "ķ_Metadata Security Handling Description____________ū"
      }
    },
    
    spref: {
    	caption: "ķ_Spatial Reference Information__________ū",
    	horizsys: {
    		caption: "ķ_Horizontal Coordinate System_________ū",
    		geograph: {
    			caption: "ķ_Geographic____ū",
    			latres: "ķ_Latitude Resolution_______ū",
    			longres: "ķ_Longitude Resolution_______ū",
    			geogunit: {
    				caption: "ķ_Geographic Coordinate Units_________ū",
    				decimalDegrees: "ķ_Decimal degrees______ū",
    				decimalMinutes: "ķ_Decimal minutes______ū",
    				decimalSeconds: "ķ_Decimal seconds______ū",
    				degreesAndDecimalMinutes: "ķ_Degrees and decimal minutes_________ū",
    				degreesMinutesAndDecimalSeconds: "ķ_Degrees, minutes, and decimal seconds____________ū",
    				radians: "ķ_Radians___ū",
    				grads: "ķ_Grads___ū"
    			}
    		},
    		planar: {
    			caption: "ķ_Planar___ū"
    		},
    		local: {
    			caption: "ķ_Local___ū",
    			localdes: "ķ_Local Description______ū",
    			localgeo: "ķ_Local Georeference Information__________ū"
    		},
    		geodetic: {
    			caption: "ķ_Geodetic Model_____ū",
    			horizdn: {
    				caption: "ķ_Horizontal Datum Name_______ū",
    				nad83: "ķ_North American Datum of 1983_________ū",
    				nad27: "ķ_North American Datum of 1927_________ū"
    			},
    			ellips: {
    				caption: "ķ_Ellipsoid Name_____ū",
    				grs80: "ķ_Geodetic Reference System 80_________ū",
    				clarke1866: "ķ_Clarke 1866____ū"
    			},
    			semiaxis: "ķ_Semi-major Axis______ū",
    			denflat: "ķ_Denominator of Flattening Ratio__________ū"
    		}
    	},
    	vertdef: {
    		caption: "ķ_Vertical Coordinate System_________ū",
    		altsys: {
    			caption: "ķ_Altitude System______ū",
    			altdatum: {
    				caption: "ķ_Altitude Datum Name_______ū",
    				navd88: "ķ_North American Vertical Datum of 1988____________ū",
    				ngvd29: "ķ_National Geodetic Vertical Datum of 1929_____________ū"
    			},
    			altres: "ķ_Altitude Resolution_______ū",
    			altunits: {
    				caption: "ķ_Altitude Distance Units________ū",
    				meters: "ķ_Meters___ū",
    				feet: "ķ_Feet__ū"
    			},
    			altenc: {
    				caption: "ķ_Altitude Encoding Method________ū",
    				explicit: "ķ_Explicit elevation coordinate included with horizontal coordinates_____________________ū",
    				implicit: "ķ_Implicit coordinate_______ū",
    				attribute: "ķ_Attribute values______ū"
    			}
    		},
    		depthsys: {
    			caption: "ķ_Depth System_____ū",
    			depthdn: {
    				caption: "ķ_Depth Datum Name______ū",
    				option1: "ķ_Local surface_____ū", 
    				option2: "ķ_Chart datum; datum for sounding reduction_____________ū", 
    				option3: "ķ_Lowest astronomical tide________ū", 
    				option4: "ķ_Highest astronomical tide_________ū", 
    				option5: "ķ_Mean low water_____ū", 
    				option6: "ķ_Mean high water______ū", 
    				option7: "ķ_Mean sea level_____ū", 
    				option8: "ķ_Land survey datum______ū", 
    				option9: "ķ_Mean low water springs________ū", 
    				option10: "ķ_Mean high water springs________ū", 
    				option11: "ķ_Mean low water neap_______ū", 
    				option12: "ķ_Mean high water neap_______ū", 
    				option13: "ķ_Mean lower low water_______ū", 
    				option14: "ķ_Mean lower low water springs_________ū", 
    				option15: "ķ_Mean higher high water________ū", 
    				option16: "ķ_Mean higher low water_______ū", 
    				option17: "ķ_Mean lower high water_______ū", 
    				option18: "ķ_Spring tide____ū", 
    				option19: "ķ_Tropic lower low water________ū", 
    				option20: "ķ_Neap tide____ū", 
    				option21: "ķ_High water____ū", 
    				option22: "ķ_Higher high water______ū", 
    				option23: "ķ_Low water____ū", 
    				option24: "ķ_Low-water datum______ū", 
    				option25: "ķ_Lowest low water______ū", 
    				option26: "ķ_Lower low water______ū", 
    				option27: "ķ_Lowest normal low water________ū", 
    				option28: "ķ_Mean tide level______ū", 
    				option29: "ķ_Indian spring low water________ū", 
    				option30: "ķ_High-water full and charge_________ū", 
    				option31: "ķ_Low-water full and charge_________ū", 
    				option32: "ķ_Columbia River datum_______ū", 
    				option33: "ķ_Gulf Coast low water datum_________ū", 
    				option34: "ķ_Equatorial springs low water_________ū", 
    				option35: "ķ_Approximate lowest astronomical tide____________ū", 
    				option36: "ķ_No correction_____ū"
    			},
    			depthres: "ķ_Depth Resolution______ū",
    			depthdu: {
    				caption: "ķ_Depth Distance Units_______ū",
    				meters: "ķ_Meters___ū",
    				feet: "ķ_Feet__ū"
    			},   			
    			depthem: {
    				caption: "ķ_Depth Encoding Method_______ū",
    				explicit: "ķ_Explicit depth coordinate included with horizontal coordinates____________________ū",
    				implicit: "ķ_Implicit coordinate_______ū",
    				attribute: "ķ_Attribute values______ū"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "ķ_Time Period Information________ū",
    	sngdate: "ķ_Single Date____ū",
    	mdattim: "ķ_Multiple Dates_____ū",
    	rngdates: "ķ_Date Range____ū",
    	caldate: "ķ_Date__ū",
    	time: "ķ_Time__ū",
    	begdate: "ķ_Beginning Date_____ū",
    	begtime: "ķ_Beginning Time_____ū",
    	enddate: "ķ_Ending Date____ū",
    	endtime: "ķ_Ending Time____ū"
    }
   
  })
);
